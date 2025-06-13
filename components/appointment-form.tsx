'use client';

import { useState, useId, useEffect, useActionState } from 'react';
import { MdOutlineArrowOutward, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useFormStatus } from 'react-dom';
import { z } from 'zod';
import { createAppointment, type CreateAppointmentResponse } from '../server/actions';
import {
  getTimeSlotsForDate,
  isDateGenerallySelectable,
  type TimeSlotInfo
} from '../lib/availability-helpers';

// Zod schema for email/phone validation
const emailOrPhoneSchema = z.string()
  .min(1, { message: "Dit veld is verplicht." })
  .refine(value => {
    const emailCheck = z.string().email().safeParse(value);
    if (emailCheck.success) return true;

    const phoneRegex = /^(0|\+)[0-9 \(\)-]{6,20}$/;
    const digitCount = (value.match(/\d/g) || []).length;
    const isPhoneFormat = phoneRegex.test(value);
    
    return isPhoneFormat && digitCount >= 7;
  }, { message: "Voer een geldig e-mailadres of telefoonnummer in." });

// Available time slots for appointments
// const timeSlots = [
//   '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
//   '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
// ];

// Child component for the submit button to use useFormStatus
interface SubmitButtonChildProps {
  isFormInvalidClientSide?: boolean;
}

function SubmitButtonChild({ isFormInvalidClientSide = false }: SubmitButtonChildProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || isFormInvalidClientSide}
      className="w-full bg-black text-left cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {/* Original Content - Slides up on hover */}
      <span className={`font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0 text-white ${pending ? 'opacity-0 -translate-y-full' : ''}`}>
        {pending ? 'Bezig met plannen...' : 'Afspraak plannen'}
        <MdOutlineArrowOutward className="h-5 w-5" />
      </span>
      {/* Hover Overlay - Slides in from bottom on hover */}
      <div className={`absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none ${pending ? '!translate-y-0 !opacity-100' : ''}`}>
        {pending ? 'Bezig met plannen...' : 'Afspraak plannen'}
        <MdOutlineArrowOutward className="h-5 w-5" />
      </div>
      {/* Loading state overlay - always on top when pending */}
      {pending && (
        <div className="absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-6 pl-4 pr-4 pointer-events-none">
          Bezig met plannen...
          <MdOutlineArrowOutward className="h-5 w-5 animate-pulse" />
        </div>
      )}
    </button>
  );
}

const initialFormState: CreateAppointmentResponse | null = null;

export function AppointmentForm() {
  const [formState, formAction] = useActionState(createAppointment, initialFormState);

  // State and handlers for Name input
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const nameId = useId();

  const handleNameFocus = () => setIsNameFocused(true);
  const handleNameBlur = () => setIsNameFocused(false);
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };
  const isNameLabelFloating = isNameFocused || nameValue !== '';

  // State and handlers for E-mail input
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const emailId = useId();

  const validateEmailField = (value: string): boolean => {
    const result = emailOrPhoneSchema.safeParse(value);
    if (!result.success) {
      setEmailError(result.error.errors[0].message);
      return false;
    }
    setEmailError(null);
    return true;
  };

  const handleEmailFocus = () => setIsEmailFocused(true);
  const handleEmailBlur = () => {
    setIsEmailFocused(false);
    validateEmailField(emailValue);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setEmailValue(newValue);
    if (formState?.errors?.find(e => e.path.includes('contactInfo'))) {
      // Clear server error for contactInfo if user starts typing
      // This is a basic way; more sophisticated error handling might be needed
    }
    validateEmailField(newValue); // Keep client-side validation for immediate feedback
  };
  const isEmailLabelFloating = isEmailFocused || emailValue !== '';

  // State and handlers for Calendar Date/Time picker
  const [isCalendarFocused, setIsCalendarFocused] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [displayedTimeSlots, setDisplayedTimeSlots] = useState<TimeSlotInfo[]>([]);
  const calendarId = useId();

  useEffect(() => {
    if (selectedDate) {
      setDisplayedTimeSlots(getTimeSlotsForDate(selectedDate));
    } else {
      setDisplayedTimeSlots([]);
    }
  }, [selectedDate]);

  const handleCalendarFocus = () => {
    setIsCalendarFocused(true);
  };

  const handleCalendarBlur = () => {
    setIsCalendarFocused(false);
  };

  const formatSelectedDateTime = () => {
    if (!selectedDate) return '';
    const dateStr = selectedDate.toLocaleDateString('nl-NL', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    return selectedTime ? `${dateStr} om ${selectedTime}` : dateStr;
  };

  const isCalendarLabelFloating = isCalendarFocused || selectedDate;

  // Calendar helper functions
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1; // Convert Sunday (0) to be last (6)
  };

  const isDateSelectable = (date: Date): boolean => {
    return isDateGenerallySelectable(date);
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      days.push(date);
    }

    return days;
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(''); // Reset time when date changes
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
  };

  // State and handlers for Additional Notes input
  const [isNotesFocused, setIsNotesFocused] = useState(false);
  const [notesValue, setNotesValue] = useState('');
  const notesId = useId();

  const handleNotesFocus = () => setIsNotesFocused(true);
  const handleNotesBlur = () => setIsNotesFocused(false);
  const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotesValue(event.target.value);
  };
  const isNotesLabelFloating = isNotesFocused || notesValue !== '';

  // Effect to reset form on successful submission
  useEffect(() => {
    if (formState?.success) {
      setNameValue('');
      setEmailValue('');
      setSelectedDate(null);
      setSelectedTime('');
      setNotesValue('');
      // Potentially clear specific server errors from display if needed
      // Or set a general success message display state
    }
  }, [formState]);

  // Determine if form is client-side invalid for submit button disabling
  const isFormInvalidClientSide = !!emailError || !nameValue || !selectedDate || !selectedTime;

  // Get specific server-side errors
  const nameServerError = formState?.errors?.find(e => e.path.includes('name'))?.message;
  const contactInfoServerError = formState?.errors?.find(e => e.path.includes('contactInfo'))?.message;
  const dateServerError = formState?.errors?.find(e => e.path.includes('appointmentDate'))?.message;
  const timeServerError = formState?.errors?.find(e => e.path.includes('appointmentTime'))?.message;

  return (
    <form 
      action={formAction}
      className="ml-[1px] mr-[1px] relative"
    >
      {/* Form Fields Container */}
      <div>
        {/* Name Input */}
        <div 
          className={`
            group relative bg-black
            border-t border-border 
            transition-all duration-200 ease-in-out
            ${isNameFocused ? 'border-l-2 border-l-white' : 'border-l-transparent'}
          `}
        >
          <label
            htmlFor={nameId}
            className={`
              absolute left-4 transition-all duration-200 ease-in-out pointer-events-none
              ${isNameLabelFloating ? 'top-1.5 text-xs text-white' : 'top-1/2 -translate-y-1/2 text-base text-white'}
              group-focus-within:top-1.5 group-focus-within:text-xs group-focus-within:text-white
            `}
          >
            Naam <span className="text-gray-400 ml-0.5">*</span>
          </label>
          <input
            id={nameId}
            type="text"
            name="name"
            value={nameValue}
            onChange={handleNameChange}
            onFocus={handleNameFocus}
            onBlur={handleNameBlur}
            className="w-full bg-transparent pt-8 pb-4 pl-4 pr-4 text-gray-50 focus:outline-none focus:ring-0 placeholder-transparent"
            placeholder=" " 
            required
          />
          {nameServerError && <p className="text-red-500 text-xs mt-1 ml-4 pb-2">{nameServerError}</p>}
        </div>

        {/* E-mail Input */}
        <div 
          className={`
            group relative bg-black
            border-t border-border 
            transition-all duration-200 ease-in-out
            ${isEmailFocused ? 'border-l-2 border-l-white' : 'border-l-transparent'}
          `}
        >
          <label
            htmlFor={emailId}
            className={`
              absolute left-4 transition-all duration-200 ease-in-out pointer-events-none
              ${isEmailLabelFloating ? 'top-1.5 text-xs text-white' : 'top-1/2 -translate-y-1/2 text-base text-white'}
              group-focus-within:top-1.5 group-focus-within:text-xs group-focus-within:text-white
            `}
          >
            E-mail of telefoonnummer <span className="text-gray-400 ml-0.5">*</span>
          </label>
          <input
            id={emailId}
            type="text"
            name="email"
            value={emailValue}
            onChange={handleEmailChange}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
            className="w-full bg-transparent pt-8 pb-4 pl-4 pr-4 text-gray-50 focus:outline-none focus:ring-0 placeholder-transparent"
            placeholder=" " 
            required
          />
          {/* Display client-side error first, then server-side if no client error */}
          {emailError && !contactInfoServerError && <p className="text-red-500 text-xs mt-1 ml-4 pb-2">{emailError}</p>}
          {contactInfoServerError && <p className="text-red-500 text-xs mt-1 ml-4 pb-2">{contactInfoServerError}</p>}
        </div>

        {/* Hidden inputs for date and time */} 
        {selectedDate && (
          <input type="hidden" name="appointmentDate" value={selectedDate.toISOString().split('T')[0]} />
        )}
        {selectedTime && (
          <input type="hidden" name="appointmentTime" value={selectedTime} />
        )}

        {/* Calendar Date/Time Picker */}
        <div
          className={`
            group relative bg-black
            border-t border-border
            transition-all duration-200 ease-in-out
            ${isCalendarFocused ? 'border-l-2 border-l-white' : 'border-l-transparent'}
          `}
        >
          <label
            htmlFor={calendarId}
            className={`
              absolute left-4 transition-all duration-200 ease-in-out pointer-events-none
              ${isCalendarLabelFloating ? 'top-1.5 text-xs text-white' : 'top-1/2 -translate-y-1/2 text-base text-white'}
              group-focus-within:top-1.5 group-focus-within:text-xs group-focus-within:text-white
            `}
          >
             Datum & Tijd <span className="text-gray-400 ml-0.5">*</span>
          </label>
          <div
            id={calendarId}
            onFocus={handleCalendarFocus}
            onBlur={handleCalendarBlur}
            className="w-full bg-transparent pt-8 pb-4 pl-4 pr-10 text-gray-50 focus:outline-none focus:ring-0 relative"
            tabIndex={0}
          >
            {formatSelectedDateTime() || <span className="text-gray-400">Selecteer een datum en tijd</span>}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          
          {/* Calendar - Always Visible */}
          <div className="w-full bg-black border-t border-border">
            {/* Calendar Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <button
                type="button"
                onClick={() => navigateMonth('prev')}
                className="p-1 hover:bg-gray-700"
              >
                <MdChevronLeft className="h-5 w-5 text-white" />
              </button>
              <span className="text-white font-semibold">
                {currentMonth.toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' })}
              </span>
              <button
                type="button"
                onClick={() => navigateMonth('next')}
                className="p-1 hover:bg-gray-700"
              >
                <MdChevronRight className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="p-4">
              {/* Weekday Headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'].map(day => (
                  <div key={day} className="text-center text-xs text-gray-400 p-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {generateCalendarDays().map((date, index) => {
                  if (!date) {
                    return <div key={index} className="p-2"></div>;
                  }

                  const isSelectable = isDateSelectable(date);
                  const isSelected = selectedDate && 
                    date.getDate() === selectedDate.getDate() &&
                    date.getMonth() === selectedDate.getMonth() &&
                    date.getFullYear() === selectedDate.getFullYear();

                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => isSelectable && handleDateSelect(date)}
                      disabled={!isSelectable}
                      className={`
                        p-2 text-sm transition-colors duration-150
                        ${isSelectable 
                          ? 'text-white hover:bg-gray-700 cursor-pointer' 
                          : 'text-gray-600 cursor-not-allowed'
                        }
                        ${isSelected ? 'bg-white !text-black' : ''}
                      `}
                    >
                      {date.getDate()}
                    </button>
                  );
                })}
              </div>

              {/* Time Slots */}
              {selectedDate && displayedTimeSlots.length > 0 && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="text-white text-sm mb-2">Beschikbare tijden:</div>
                  <div className="grid grid-cols-4 gap-2">
                    {displayedTimeSlots.map(slotInfo => (
                      <button
                        key={slotInfo.time}
                        type="button"
                        onClick={() => slotInfo.isSelectable && handleTimeSelect(slotInfo.time)}
                        disabled={!slotInfo.isSelectable}
                        className={`
                          p-2 text-xs transition-colors duration-150
                          ${selectedTime === slotInfo.time && slotInfo.isSelectable ? 'bg-white !text-black' : ''}
                          ${slotInfo.isSelectable ? 'text-white hover:bg-gray-700 border border-border cursor-pointer' : ''}
                          ${slotInfo.isDeterministicallyBlocked ? 'text-gray-500 border border-gray-700 cursor-not-allowed opacity-70' : ''}
                          ${!slotInfo.isSelectable && !slotInfo.isDeterministicallyBlocked ? 'text-gray-600 border border-gray-800 cursor-not-allowed opacity-50' : ''}
                        `}
                      >
                        {slotInfo.time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {selectedDate && displayedTimeSlots.length === 0 && (
                 <div className="mt-4 pt-4 border-t border-border">
                   <p className="text-gray-400 text-sm p-2">Geen beschikbare tijden voor deze dag.</p>
                 </div>
              )}
            </div>
             {dateServerError && <p className="text-red-500 text-xs p-4">{dateServerError}</p>}
             {timeServerError && <p className="text-red-500 text-xs p-4">{timeServerError}</p>}
          </div>
        </div>

        {/* Additional Notes Input */}
        <div 
          className={`
            group relative bg-black
            border-t border-b border-border 
            transition-all duration-200 ease-in-out
            ${isNotesFocused ? 'border-l-2 border-l-white' : 'border-l-transparent'}
          `}
        >
          <label
            htmlFor={notesId}
            className={`
              absolute left-4 pointer-events-none
              transition-all duration-200 ease-in-out
              ${isNotesLabelFloating ? 'top-1.5 text-xs text-white' : 'top-4 text-base text-white'}
              group-focus-within:top-1.5 group-focus-within:text-xs group-focus-within:text-white 
            `}
          >
            Aanvullende opmerkingen <span className="text-gray-400 ml-0.5">(optioneel)</span>
          </label>
          <textarea
            id={notesId}
            name="notes"
            value={notesValue}
            onChange={handleNotesChange}
            onFocus={handleNotesFocus}
            onBlur={handleNotesBlur}
            className="w-full bg-transparent pt-8 pb-16 pl-4 pr-4 text-gray-50 focus:outline-none focus:ring-0 placeholder-transparent resize-none"
            placeholder=" " 
          />
        </div>

        {/* Display general form message from server (success or general error) */}
        {formState?.message && !formState.errors && (
          <div className={`p-4 text-sm ${formState.success ? 'text-green-500' : 'text-red-500'}`}>
            {formState.message}
          </div>
        )}
         {formState?.message && formState.errors && formState.errors.length > 0 && (
          <div className={`p-4 text-sm text-red-500`}> 
            {/* General validation error message if specific errors are not caught above or for other reasons */}
            {formState.message}
          </div>
        )}

        {/* Submit Button */}
        <div className="group relative w-full cursor-pointer overflow-hidden border-b border-border">
          <SubmitButtonChild isFormInvalidClientSide={isFormInvalidClientSide} />
        </div>
      </div>
    </form>
  );
} 