export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6; // Sunday to Saturday

export interface DailySlots {
  isOpen: boolean;
  slots: string[]; // e.g., ['09:00', '09:30']
}

export interface WeeklyAvailability {
  0: DailySlots; // Sunday
  1: DailySlots; // Monday
  2: DailySlots; // Tuesday
  3: DailySlots; // Wednesday
  4: DailySlots; // Thursday
  5: DailySlots; // Friday
  6: DailySlots; // Saturday
}

export interface DateOverride extends Partial<DailySlots> {
  isCompletelyBlocked?: boolean; // If true, day is entirely closed, slots array is ignored
  reason?: string; // Optional reason for override, e.g., "Public Holiday"
}

export interface DateOverrides {
  [date: string]: DateOverride; // Key is YYYY-MM-DD
}

export interface RandomBlockConfig {
  /** Probability (0 to 1) that an otherwise available slot will be deterministically blocked */
  blockProbability: number;
  /** Minimum number of deterministically blocked slots to show per day, if probability doesn't hit enough */
  minBlockedSlots: number;
  /** Maximum number of deterministically blocked slots to show per day */
  maxBlockedSlots: number;
}

// --- DEFAULT CONFIGURATION ---
// You can adjust these values to your needs

export const BASE_TIME_SLOTS: string[] = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', 
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', 
  '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
];

export const weeklyAvailabilitySettings: WeeklyAvailability = {
  0: { isOpen: true, slots: BASE_TIME_SLOTS }, // Sunday - NOW OPEN
  1: { isOpen: true, slots: BASE_TIME_SLOTS }, // Monday - All base slots
  2: { isOpen: true, slots: BASE_TIME_SLOTS }, // Tuesday
  3: { isOpen: true, slots: BASE_TIME_SLOTS }, // Wednesday
  4: { isOpen: true, slots: BASE_TIME_SLOTS }, // Thursday
  5: { isOpen: true, slots: BASE_TIME_SLOTS }, // Friday
  6: { isOpen: true, slots: BASE_TIME_SLOTS }, // Saturday - NOW OPEN
};

export const dateOverridesSettings: DateOverrides = {
  '2024-12-25': { isCompletelyBlocked: true, reason: 'Christmas Day' },
  '2025-01-01': { isCompletelyBlocked: true, reason: 'New Year\'s Day' },
  // Example of custom hours for a specific date:
  // '2024-11-28': { isOpen: true, slots: ['10:00', '10:30', '11:00', '11:30'], reason: 'Special Event' },
};

export const randomBlockConfig: RandomBlockConfig = {
  blockProbability: 0.30, // Increased to 30%
  minBlockedSlots: 2,    // At least 2 slots (one 1-hour block)
  maxBlockedSlots: 6,    // At most 6 slots (three 1-hour blocks)
}; 