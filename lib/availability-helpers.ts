import {
  weeklyAvailabilitySettings,
  dateOverridesSettings,
  randomBlockConfig,
  BASE_TIME_SLOTS, // Import BASE_TIME_SLOTS to find consecutive slots
  type DayOfWeek,
  type DailySlots
} from './availability-config';

/**
 * Gets the ISO 8601 week number for a date.
 * @param date The date.
 * @returns The ISO week number.
 */
export function getISOWeekNumber(date: Date): number {
  const tempDate = new Date(date.valueOf());
  tempDate.setDate(tempDate.getDate() + 3 - ((tempDate.getDay() + 6) % 7)); // Thursday of current week
  const firstThursday = new Date(tempDate.getFullYear(), 0, 4);
  firstThursday.setDate(firstThursday.getDate() + 3 - ((firstThursday.getDay() + 6) % 7));
  return 1 + Math.round(((tempDate.valueOf() - firstThursday.valueOf()) / 86400000 - 3 + ((firstThursday.getDay() + 6) % 7)) / 7);
}

/**
 * Generates a simple deterministic pseudo-random number (0-1) based on seed values.
 * This is not cryptographically secure randomness, just a simple way to get consistent results.
 */
function seededPseudoRandom(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0; // Convert to 32bit integer
  }
  const random = (Math.abs(hash) / 2147483647); // Max 32-bit signed integer
  return parseFloat(random.toFixed(5)); // Keep a few decimal places
}

/**
 * Deterministically shuffles an array.
 * @param array The array to shuffle.
 * @param seed The seed for shuffling.
 * @returns A new shuffled array.
 */
function seededShuffle<T>(array: T[], seed: string): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const jSeed = `${seed}-shuffle-${i}`;
    const j = Math.floor(seededPseudoRandom(jSeed) * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Finds the next 30-minute consecutive time slot.
 * @param time The starting time slot (e.g., "09:00").
 * @returns The next time slot string (e.g., "09:30") or null if not found or at end of day.
 */
function findConsecutiveTime(time: string, allDaySlots: string[]): string | null {
  const currentIndex = allDaySlots.indexOf(time);
  if (currentIndex === -1 || currentIndex === allDaySlots.length - 1) {
    return null;
  }
  // Basic check: ensure the next slot is indeed 30 mins later (implies sorted BASE_TIME_SLOTS)
  // More robust: parse times and check difference. For now, relies on sorted list.
  return allDaySlots[currentIndex + 1];
}

export interface TimeSlotInfo {
  time: string;
  isSelectable: boolean; // Combines all conditions: generally available, not deterministically blocked, not actually booked
  isDeterministicallyBlocked: boolean;
  // isActuallyBooked?: boolean; // Future: for checking against DB
}

/**
 * Gets time slot information for a specific date, including availability and blocked status.
 * @param date The date for which to get slots.
 * @returns An array of TimeSlotInfo objects.
 */
export function getTimeSlotsForDate(date: Date): TimeSlotInfo[] {
  const dayOfWeek = date.getDay() as DayOfWeek;
  const dateString = date.toISOString().split('T')[0];

  let dailyRule: DailySlots;
  const override = dateOverridesSettings[dateString];

  if (override) {
    if (override.isCompletelyBlocked) return [];
    dailyRule = {
      isOpen: override.isOpen !== undefined ? override.isOpen : weeklyAvailabilitySettings[dayOfWeek].isOpen,
      slots: override.slots || weeklyAvailabilitySettings[dayOfWeek].slots,
    };
  } else {
    dailyRule = weeklyAvailabilitySettings[dayOfWeek];
  }

  if (!dailyRule.isOpen || !dailyRule.slots || dailyRule.slots.length === 0) {
    return [];
  }

  // Initial potential slots for the day based on rules (not yet considering any blocking)
  const potentialSlotsStrings = [...dailyRule.slots];
  
  // Create initial TimeSlotInfo objects, all selectable by default
  let slotsInfo: TimeSlotInfo[] = potentialSlotsStrings.map(time => ({
    time,
    isSelectable: true,
    isDeterministicallyBlocked: false,
  }));

  // Create a map for quick lookup by time string
  const slotInfoMap = new Map<string, TimeSlotInfo>(slotsInfo.map(si => [si.time, si]));

  // --- Apply Deterministic Random Blocking (only for next 14 days) ---
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const fourteenDaysFromToday = new Date(today.valueOf() + 14 * 24 * 60 * 60 * 1000);

  if (date >= today && date < fourteenDaysFromToday) {
    // Deterministically shuffle the slots before applying blocking logic
    // We shuffle the slot *strings* to decide the order of consideration for blocking
    const shuffledSlotTimes = seededShuffle(potentialSlotsStrings, `${dateString}-shuffleOrder`);

    let deterministicallyBlockedCount = 0;

    // --- Probability Pass for 1-hour blocks ---
    for (const timeToConsider of shuffledSlotTimes) {
      if (deterministicallyBlockedCount >= randomBlockConfig.maxBlockedSlots) break;

      const currentSlotInfo = slotInfoMap.get(timeToConsider);
      if (!currentSlotInfo || currentSlotInfo.isDeterministicallyBlocked) continue;

      const seed = `${dateString}-prob-${timeToConsider}`;
      if (seededPseudoRandom(seed) < randomBlockConfig.blockProbability) {
        currentSlotInfo.isDeterministicallyBlocked = true;
        deterministicallyBlockedCount++;

        if (deterministicallyBlockedCount < randomBlockConfig.maxBlockedSlots) {
          const consecutiveTime = findConsecutiveTime(timeToConsider, potentialSlotsStrings);
          if (consecutiveTime) {
            const consecutiveSlotInfo = slotInfoMap.get(consecutiveTime);
            if (consecutiveSlotInfo && !consecutiveSlotInfo.isDeterministicallyBlocked) {
              consecutiveSlotInfo.isDeterministicallyBlocked = true;
              deterministicallyBlockedCount++;
            }
          }
        }
      }
    }

    // --- MinBlockedSlots Pass for 1-hour blocks ---
    // Re-iterate through shuffled slots to ensure minimum if not met
    if (deterministicallyBlockedCount < randomBlockConfig.minBlockedSlots) {
      for (const timeToConsider of shuffledSlotTimes) {
        if (deterministicallyBlockedCount >= randomBlockConfig.minBlockedSlots) break;
        if (deterministicallyBlockedCount >= randomBlockConfig.maxBlockedSlots) break;

        const currentSlotInfo = slotInfoMap.get(timeToConsider);
        if (!currentSlotInfo || currentSlotInfo.isDeterministicallyBlocked) continue;
        
        // Force block this slot to meet minimum
        currentSlotInfo.isDeterministicallyBlocked = true;
        deterministicallyBlockedCount++;

        if (deterministicallyBlockedCount < randomBlockConfig.maxBlockedSlots && 
            deterministicallyBlockedCount < randomBlockConfig.minBlockedSlots) { // Prioritize completing pairs for min
          const consecutiveTime = findConsecutiveTime(timeToConsider, potentialSlotsStrings);
          if (consecutiveTime) {
            const consecutiveSlotInfo = slotInfoMap.get(consecutiveTime);
            if (consecutiveSlotInfo && !consecutiveSlotInfo.isDeterministicallyBlocked) {
              consecutiveSlotInfo.isDeterministicallyBlocked = true;
              deterministicallyBlockedCount++;
            }
          }
        }
      }
    }
  } // End of 14-day conditional random blocking
  
  // Final pass to set isSelectable based on blocking
  slotsInfo.forEach(si => {
    si.isSelectable = !si.isDeterministicallyBlocked;
    // Future: si.isSelectable = !si.isDeterministicallyBlocked && !si.isActuallyBooked;
  });

  // --- Filter out past slots for today ---
  if (dateString === today.toISOString().split('T')[0]) {
    const now = new Date();
    const currentTimeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    slotsInfo = slotsInfo.filter(slotInfo => {
      if (slotInfo.time < currentTimeString) {
        // If the slot is in the past today, it's not selectable, regardless of other states
        slotInfo.isSelectable = false; 
        // We might want to keep it in the list to show as explicitly unavailable, or filter it out entirely.
        // Current filter below removes it. If you want to show it as greyed out, remove the filter
        // and rely on the isSelectable flag for styling in the component.
        // For now, let's keep them but mark as not selectable, so the component can style them.
      }
      return true; // Keep all slots for now, rely on isSelectable in component
    });

    // Re-filter to REMOVE slots that are in the past, making them unselectable
    // This ensures they don't even appear as an option to click, even if styled as disabled
    slotsInfo = slotsInfo.filter(slotInfo => {
        if (slotInfo.time < currentTimeString) {
            slotInfo.isSelectable = false; // ensure it's marked non-selectable
            // If you want them GONE from the list: return false;
            // If you want them VISIBLE but DISABLED: return true, and handle styling in component
        }
        return true; // Keep in list, rely on isSelectable for UI
    });

    // Let's refine this: if a slot is in the past, it should NOT be selectable.
    // The component will then style it as disabled.
    const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();
    slotsInfo.forEach(slotInfo => {
        const [slotHours, slotMinutes] = slotInfo.time.split(':').map(Number);
        const slotTimeInMinutes = slotHours * 60 + slotMinutes;
        if (slotTimeInMinutes < currentTimeInMinutes) {
            slotInfo.isSelectable = false;
        }
    });
  }

  return slotsInfo; // This is already sorted by time as it was derived from potentialSlotsStrings
}

/**
 * Checks if a specific date is generally selectable (i.e., not in the past and not fully blocked by overrides or weekly settings).
 * @param date The date to check.
 * @returns True if the date might have available slots, false otherwise.
 */
export function isDateGenerallySelectable(date: Date): boolean {
  const todayDt = new Date(); // Renamed to avoid conflict with date param
  todayDt.setHours(0, 0, 0, 0);
  if (date < todayDt) return false;

  const dayOfWeek = date.getDay() as DayOfWeek;
  const dateString = date.toISOString().split('T')[0];

  const override = dateOverridesSettings[dateString];
  if (override && override.isCompletelyBlocked) {
    return false;
  }
  if (override && override.isOpen === false) { // Explicitly set to not open, even if slots are listed
    return false;
  }
  if (override && override.isOpen && override.slots && override.slots.length > 0) {
    return true; // Open by override with specific slots
  }
  if (override && override.isOpen && (!override.slots || override.slots.length === 0)) {
     // Open by override, but no specific slots listed means use weekly for that day
     if(!weeklyAvailabilitySettings[dayOfWeek].isOpen || weeklyAvailabilitySettings[dayOfWeek].slots.length === 0) {
        return false;
     }
  }

  if (!override && !weeklyAvailabilitySettings[dayOfWeek].isOpen) {
    return false;
  }
  if (!override && weeklyAvailabilitySettings[dayOfWeek].slots.length === 0) {
    return false;
  }

  return true;
} 