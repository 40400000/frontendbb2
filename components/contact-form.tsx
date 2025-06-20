'use client';

import { useState, useId, useEffect, useActionState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { useFormStatus } from 'react-dom';
import { z } from 'zod';
import { sendContactEmail } from '@/app/actions/send-contact-email';

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

const initialState = {
  message: '',
  type: '' as 'success' | 'error' | '',
};

// Child component for the submit button to use useFormStatus
interface SubmitButtonChildProps {
  isFormInvalid?: boolean;
}

function SubmitButtonChild({ isFormInvalid = false }: SubmitButtonChildProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || isFormInvalid}
      className="w-full bg-black text-left cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {/* Original Content - Slides up on hover */}
      <span className={`font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0 text-white ${pending ? 'opacity-0 -translate-y-full' : ''}`}>
        {pending ? 'Bezig met verzenden...' : 'Verzenden'}
        <MdOutlineArrowOutward className="h-5 w-5" />
      </span>
      {/* Hover Overlay - Slides in from bottom on hover */}
      <div className={`absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none ${pending ? '!translate-y-0 !opacity-100' : ''}`}>
        {pending ? 'Bezig met verzenden...' : 'Verzenden'}
        <MdOutlineArrowOutward className="h-5 w-5" />
      </div>
      {/* Loading state overlay - always on top when pending */}
      {pending && (
        <div className="absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-6 pl-4 pr-4 pointer-events-none">
          Bezig met verzenden...
          <MdOutlineArrowOutward className="h-5 w-5 animate-pulse" />
        </div>
      )}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendContactEmail, initialState);

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
    validateEmailField(newValue);
  };
  const isEmailLabelFloating = isEmailFocused || emailValue !== '';

  // State and handlers for Vraag input
  const [isVraagFocused, setIsVraagFocused] = useState(false);
  const [vraagValue, setVraagValue] = useState('');
  const vraagId = useId();

  const handleVraagFocus = () => setIsVraagFocused(true);
  const handleVraagBlur = () => setIsVraagFocused(false);
  const handleVraagChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVraagValue(event.target.value);
  };
  const isVraagLabelFloating = isVraagFocused || vraagValue !== '';

  // State and handlers for FoundVia input
  const [isFoundViaFocused, setIsFoundViaFocused] = useState(false);
  const [foundViaValue, setFoundViaValue] = useState('');
  const [isFoundViaDropdownOpen, setIsFoundViaDropdownOpen] = useState(false);
  const foundViaId = useId();

  const foundViaOptions = [
    { value: "google", label: "Google" },
    { value: "instagram", label: "Instagram" },
    { value: "discord", label: "Discord" },
    { value: "via-anderen", label: "Via anderen" },
    { value: "anders", label: "Anders..." },
  ];

  const handleFoundViaFocus = () => {
    setIsFoundViaFocused(true);
  };
  const handleFoundViaBlur = () => {
    setTimeout(() => {
      setIsFoundViaFocused(false);
      setIsFoundViaDropdownOpen(false);
    }, 100);
  };

  const handleFoundViaOptionClick = (value: string) => {
    setFoundViaValue(value);
    setIsFoundViaDropdownOpen(false);
    setIsFoundViaFocused(false);
  };

  const toggleFoundViaDropdown = () => {
    setIsFoundViaDropdownOpen(!isFoundViaDropdownOpen);
    if (!isFoundViaDropdownOpen) {
      setIsFoundViaFocused(true);
    }
  };

  const isFoundViaLabelFloating = isFoundViaFocused || foundViaValue !== '' || isFoundViaDropdownOpen;
  const selectedOptionLabel = foundViaOptions.find(option => option.value === foundViaValue)?.label;

  useEffect(() => {
    if (state.type === 'success') {
      setEmailValue('');
      setVraagValue('');
      setFoundViaValue('');
      setEmailError(null);
      // Optionally reset focus states as well
      setIsEmailFocused(false);
      setIsVraagFocused(false);
      setIsFoundViaFocused(false);
      setIsFoundViaDropdownOpen(false);
    }
  }, [state.type]);

  return (
    <form 
      action={formAction} 
      onSubmit={(e) => {
        const isEmailValid = validateEmailField(emailValue);
        // Add other field validations here if needed
        if (!isEmailValid) {
          e.preventDefault(); // Prevent form submission if validation fails
        }
      }}
      className="ml-[1px] mr-[1px] relative"
    >
      {/* Form Fields Container */}
      <div className={state.type === 'success' ? 'filter blur-sm pointer-events-none' : ''}>
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
            E-mail<span className="text-gray-400 ml-0.5">*</span>
          </label>
          <input
            id={emailId}
            type="email"
            name="email"
            value={emailValue}
            onChange={handleEmailChange}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
            className="w-full bg-transparent pt-8 pb-4 pl-4 pr-4 text-gray-50 focus:outline-none focus:ring-0 placeholder-transparent"
            placeholder=" " 
            required
          />
          {emailError && <p className="text-red-500 text-xs mt-1 ml-4 pb-2">{emailError}</p>}
        </div>

        {/* Vraag Input */}
        <div 
          className={`
            group relative bg-black
            border-t border-b border-border 
            transition-all duration-200 ease-in-out
            ${isVraagFocused ? 'border-l-2 border-l-white' : 'border-l-transparent'}
          `}
        >
          <label
            htmlFor={vraagId}
            className={`
              absolute left-4 pointer-events-none
              transition-all duration-200 ease-in-out
              ${isVraagLabelFloating ? 'top-1.5 text-xs text-white' : 'top-4 text-base text-white'}
              group-focus-within:top-1.5 group-focus-within:text-xs group-focus-within:text-white 
            `}
          >
            Vraag <span className="text-gray-400 ml-0.5">*</span>
          </label>
          <textarea
            id={vraagId}
            name="question"
            value={vraagValue}
            onChange={handleVraagChange}
            onFocus={handleVraagFocus}
            onBlur={handleVraagBlur}
            className="w-full bg-transparent pt-8 pb-24 pl-4 pr-4 text-gray-50 focus:outline-none focus:ring-0 placeholder-transparent resize-none"
            placeholder=" " 
          />
        </div>

        {/* FoundVia Custom Dropdown */}
        <div
          className={`
            group relative bg-black
            border-b border-border
            transition-all duration-200 ease-in-out
            ${isFoundViaFocused || isFoundViaDropdownOpen ? 'border-l-2 border-l-white' : 'border-l-transparent'}
          `}
          tabIndex={0}
        >
          <label
            htmlFor={foundViaId}
            className={`
              absolute left-4 pointer-events-none
              transition-all duration-200 ease-in-out
              ${isFoundViaLabelFloating ? 'top-1.5 text-xs text-white' : 'top-1/2 -translate-y-1/2 text-base text-white'}
              group-focus-within:top-1.5 group-focus-within:text-xs group-focus-within:text-white
            `}
          >
            Hoe heb je ons gevonden? <span className="text-gray-400 ml-0.5">(optioneel)</span>
          </label>
          <input
            id={foundViaId}
            type="text"
            name="foundVia" 
            value={foundViaValue} 
            onChange={(e) => setFoundViaValue(e.target.value)}
            className="hidden" 
            aria-hidden="true"
          />
          <div
            id={foundViaId}
            onClick={toggleFoundViaDropdown}
            onFocus={handleFoundViaFocus}
            onBlur={handleFoundViaBlur}
            className="w-full bg-transparent pt-8 pb-4 pl-4 pr-10 text-gray-50 focus:outline-none focus:ring-0 cursor-pointer relative"
            aria-haspopup="listbox"
            aria-expanded={isFoundViaDropdownOpen}
            tabIndex={0}
          >
            {selectedOptionLabel || <span className="text-transparent">.</span>}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className={`h-5 w-5 text-gray-400 transition-transform duration-200 ease-in-out ${isFoundViaDropdownOpen ? 'transform rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {isFoundViaDropdownOpen && (
            <ul
              className="absolute z-10 w-full mt-1 bg-black border border-border rounded-md max-h-60 overflow-auto focus:outline-none"
              role="listbox"
              aria-labelledby={foundViaId}
            >
              {foundViaOptions.map((option) => (
                <li
                  key={option.value}
                  className={`px-4 py-3 text-sm text-gray-50 hover:bg-gray-700 cursor-pointer ${foundViaValue === option.value ? 'bg-gray-700' : ''}`}
                  onClick={() => handleFoundViaOptionClick(option.value)}
                  onMouseDown={(e) => e.preventDefault()}
                  role="option"
                  aria-selected={foundViaValue === option.value}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Submit Button */}
        <div className="group relative w-full cursor-pointer overflow-hidden border-b border-border">
          <SubmitButtonChild isFormInvalid={!!emailError} />
        </div>
      </div>

      {/* Success Overlay */}
      {state.type === 'success' && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/90 p-8 text-center">
          <p className="text-xl font-semibold text-white mb-4">{state.message}</p>
          <button
            type="button"
            onClick={() => {
              // Create a FormData object with the reset flag
              const formData = new FormData();
              formData.append('resetForm', 'true');
              formAction(formData); // Dispatch the action with the reset flag
            }}
            className="group relative cursor-pointer overflow-hidden border border-white px-6 py-3 text-white font-semibold hover:bg-white hover:text-black transition-colors duration-300"
          >
            Verstuur nog een bericht
          </button>
        </div>
      )}

      {/* Error Message Display (existing, if any, or can be styled similarly if needed) */}
      {state.type === 'error' && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">Sorry! Er is iets misgegaan bij het verzenden van je bericht. Probeer het opnieuw.</span> 
        </p>
      )}
    </form>
  );
} 