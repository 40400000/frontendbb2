'use client';

import { useState, useEffect } from 'react';

interface ContactStatusDotsProps {
  type: 'phone' | 'email';
}

function getDutchTimeStatus(): boolean {
  const now = new Date();
  // Options to get hour in 'Europe/Amsterdam' timezone in 24-hour format
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Europe/Amsterdam',
    hour: 'numeric',
    hour12: false,
  };
  
  // Fallback for environments where Intl might be limited or to ensure robustness
  let hourString: string;
  try {
    // Intl.DateTimeFormat can return hour as '24' for midnight in some locales/setups when hourCycle isn't 'h23'.
    // We directly get the hour part to handle this.
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(now);
    let tempHour: string | undefined;
    for (const part of parts) {
        if (part.type === 'hour') {
            tempHour = part.value;
            break;
        }
    }
    if (tempHour === undefined) {
        throw new Error("Could not extract hour from Intl.DateTimeFormat parts.");
    }
    hourString = tempHour;

  } catch (e) {
    console.warn("Intl.DateTimeFormat for timezone 'Europe/Amsterdam' might not be fully supported or encountered an issue. Time check may be inaccurate.", e);
    // Basic fallback: get local hour. This will not be Dutch time.
    hourString = now.getHours().toString(); 
  }

  let hour = parseInt(hourString, 10);
  
  // If hour is 24 (from Intl.DateTimeFormat for midnight in some cases), treat as 0
  if (hour === 24) {
      hour = 0;
  }

  // Check if hour is between 8 (inclusive) and 22 (exclusive: 8:00 AM to 9:59 PM)
  if (!isNaN(hour) && hour >= 8 && hour < 22) {
    return true; // Online
  }
  return false; // Offline
}

export function ContactStatusDots({ type }: ContactStatusDotsProps) {
  const [isOnlineForPhone, setIsOnlineForPhone] = useState(false);

  useEffect(() => {
    if (type === 'phone') {
      setIsOnlineForPhone(getDutchTimeStatus());
    }
  }, [type]);

  const isGreen = type === 'email' || (type === 'phone' && isOnlineForPhone);
  const dotColor = isGreen ? 'bg-green-500' : 'bg-gray-400';

  return (
    <span className={`inline-block w-1.5 h-1.5 rounded-full ${dotColor} flex-shrink-0 ml-2`} />
  );
} 