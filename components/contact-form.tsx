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
      className="w-full bg-[#111111] text-white font-medium text-sm md:text-base py-3 md:py-4 px-6 rounded-xl hover:bg-[#111111]/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {pending ? 'Bezig met verzenden...' : 'Verzenden'}
      <MdOutlineArrowOutward className={`h-4 w-4 ${pending ? 'animate-pulse' : ''}`} />
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
      className="space-y-6 relative"
    >
      {/* Form Fields Container */}
      <div className={state.type === 'success' ? 'filter blur-sm pointer-events-none' : 'space-y-6'}>
        {/* E-mail Input */}
        <div className="space-y-2">
          <label
            htmlFor={emailId}
            className="block text-sm font-medium text-[#111111]"
          >
            E-mail of telefoonnummer <span className="text-red-500">*</span>
          </label>
          <input
            id={emailId}
            type="email"
            name="email"
            value={emailValue}
            onChange={handleEmailChange}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="je@email.com"
            required
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>

        {/* Vraag Input */}
        <div className="space-y-2">
          <label
            htmlFor={vraagId}
            className="block text-sm font-medium text-[#111111]"
          >
            Vraag <span className="text-red-500">*</span>
          </label>
          <textarea
            id={vraagId}
            name="question"
            value={vraagValue}
            onChange={handleVraagChange}
            onFocus={handleVraagFocus}
            onBlur={handleVraagBlur}
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
            placeholder="Vertel ons over je vraag of uitdaging..."
            required
          />
        </div>

        {/* FoundVia Custom Dropdown */}
        <div className="space-y-2">
          <label
            htmlFor={foundViaId}
            className="block text-sm font-medium text-[#111111]"
          >
            Hoe heb je ons gevonden? <span className="text-gray-400">(optioneel)</span>
          </label>
          <div className="relative">
            <input
              type="text"
              name="foundVia" 
              value={foundViaValue} 
              onChange={(e) => setFoundViaValue(e.target.value)}
              className="hidden" 
              aria-hidden="true"
            />
            <div
              onClick={toggleFoundViaDropdown}
              onFocus={handleFoundViaFocus}
              onBlur={handleFoundViaBlur}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors cursor-pointer flex items-center justify-between"
              aria-haspopup="listbox"
              aria-expanded={isFoundViaDropdownOpen}
              tabIndex={0}
            >
              <span className={selectedOptionLabel ? 'text-[#111111]' : 'text-gray-400'}>
                {selectedOptionLabel || 'Selecteer een optie'}
              </span>
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
            {isFoundViaDropdownOpen && (
              <ul
                className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto focus:outline-none"
                role="listbox"
              >
                {foundViaOptions.map((option) => (
                  <li
                    key={option.value}
                    className={`px-4 py-3 text-sm text-[#111111] hover:bg-gray-50 cursor-pointer ${foundViaValue === option.value ? 'bg-blue-50 text-blue-600' : ''}`}
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
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <SubmitButtonChild isFormInvalid={!!emailError} />
        </div>
      </div>

      {/* Success Overlay */}
      {state.type === 'success' && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm p-8 text-center rounded-xl">
          <div className="bg-green-100 p-4 rounded-full mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-xl font-medium text-[#111111] mb-6">{state.message}</p>
          <button
            type="button"
            onClick={() => {
              // Create a FormData object with the reset flag
              const formData = new FormData();
              formData.append('resetForm', 'true');
              formAction(formData); // Dispatch the action with the reset flag
            }}
            className="bg-[#111111] text-white font-medium px-6 py-3 rounded-xl hover:bg-[#111111]/90 transition-colors"
          >
            Verstuur nog een bericht
          </button>
        </div>
      )}

      {/* Error Message Display */}
      {state.type === 'error' && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-sm text-red-600">
            <span className="font-medium">Sorry! Er is iets misgegaan bij het verzenden van je bericht. Probeer het opnieuw.</span> 
          </p>
        </div>
      )}
    </form>
  );
} 