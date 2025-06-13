'use client';

import { useState, useId, useEffect, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { z } from 'zod';
import { addToWaitlist, type AddToWaitlistResponse } from '@/server/actions';

// Zod schemas for validation
const emailSchema = z.string().email({ message: "Voer een geldig e-mailadres in." }).min(1, { message: "Dit veld is verplicht." });
const phoneSchema = z.string()
  .min(1, { message: "Dit veld is verplicht." })
  .regex(/^((\+|00)31|0)6[1-9][0-9]{7}$/, { message: "Voer een geldig Nederlands mobiel nummer in." });

// Child component for the submit button
function SubmitButtonChild({ isFormInvalid = false }: { isFormInvalid?: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || isFormInvalid}
      className="w-full bg-black text-left cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
    >
      <span className={`font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0 text-white ${pending ? 'opacity-0 -translate-y-full' : ''}`}>
        {pending ? 'Bezig met verzenden...' : 'Verzenden'}
        <MdOutlineArrowOutward className="h-5 w-5" />
      </span>
      <div className={`absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-6 pl-4 pr-4 transition-all duration-300 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none ${pending ? '!translate-y-0 !opacity-100' : ''}`}>
        {pending ? 'Bezig met verzenden...' : 'Verzenden'}
        <MdOutlineArrowOutward className="h-5 w-5" />
      </div>
      {pending && (
        <div className="absolute inset-0 bg-white text-black font-semibold flex justify-between items-center py-6 pl-4 pr-4 pointer-events-none">
          Bezig met verzenden...
          <MdOutlineArrowOutward className="h-5 w-5 animate-pulse" />
        </div>
      )}
    </button>
  );
}

const initialFormState: AddToWaitlistResponse = {
  success: false,
  message: '',
};

export function WachtlijstForm() {
  const [formState, formAction] = useActionState(addToWaitlist, initialFormState);

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const emailId = useId();

  const validateEmailField = (value: string): boolean => {
    const result = emailSchema.safeParse(value);
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

  const [isBedrijfsnaamFocused, setIsBedrijfsnaamFocused] = useState(false);
  const [bedrijfsnaamValue, setBedrijfsnaamValue] = useState('');
  const bedrijfsnaamId = useId();

  const handleBedrijfsnaamFocus = () => setIsBedrijfsnaamFocused(true);
  const handleBedrijfsnaamBlur = () => setIsBedrijfsnaamFocused(false);
  const handleBedrijfsnaamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBedrijfsnaamValue(event.target.value);
  };
  const isBedrijfsnaamLabelFloating = isBedrijfsnaamFocused || bedrijfsnaamValue !== '';
  
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [phoneValue, setPhoneValue] = useState('');
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const phoneId = useId();

  const validatePhoneField = (value: string): boolean => {
    const result = phoneSchema.safeParse(value);
    if (!result.success) {
      setPhoneError(result.error.errors[0].message);
      return false;
    }
    setPhoneError(null);
    return true;
  };

  const handlePhoneFocus = () => setIsPhoneFocused(true);
  const handlePhoneBlur = () => {
    setIsPhoneFocused(false);
    validatePhoneField(phoneValue);
  };
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setPhoneValue(newValue);
    validatePhoneField(newValue);
  };
  const isPhoneLabelFloating = isPhoneFocused || phoneValue !== '';

  useEffect(() => {
    if (formState.success) {
      setEmailValue('');
      setBedrijfsnaamValue('');
      setPhoneValue('');
      setEmailError(null);
      setPhoneError(null);
    }
  }, [formState.success]);
  
  const isFormInvalid = !!emailError || emailValue.trim() === '' || !!phoneError || phoneValue.trim() === '';
  const serverErrorMessage = !formState.success && formState.message && formState.message !== "Validatiefout." ? formState.message : null;
  const emailZodError = formState.errors?.find(e => e.path.includes('email'))?.message;
  const phoneZodError = formState.errors?.find(e => e.path.includes('phoneNumber'))?.message;

  return (
    <form 
      action={formAction}
      className="ml-[1px] mr-[1px] relative"
    >
      <div className={formState.success ? 'filter blur-sm pointer-events-none' : ''}>
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
            E-mailadres <span className="text-gray-400 ml-0.5">*</span>
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
          {(emailError || emailZodError) && <p className="text-red-500 text-xs mt-1 ml-4 pb-2">{emailError || emailZodError}</p>}
        </div>

        {/* Phone Number Input */}
        <div 
          className={`
            group relative bg-black
            border-t border-border 
            transition-all duration-200 ease-in-out
            ${isPhoneFocused ? 'border-l-2 border-l-white' : 'border-l-transparent'}
          `}
        >
          <label
            htmlFor={phoneId}
            className={`
              absolute left-4 transition-all duration-200 ease-in-out pointer-events-none
              ${isPhoneLabelFloating ? 'top-1.5 text-xs text-white' : 'top-1/2 -translate-y-1/2 text-base text-white'}
              group-focus-within:top-1.5 group-focus-within:text-xs group-focus-within:text-white
            `}
          >
            Telefoonnummer <span className="text-gray-400 ml-0.5">*</span>
          </label>
          <input
            id={phoneId}
            type="tel"
            name="phoneNumber"
            value={phoneValue}
            onChange={handlePhoneChange}
            onFocus={handlePhoneFocus}
            onBlur={handlePhoneBlur}
            className="w-full bg-transparent pt-8 pb-4 pl-4 pr-4 text-gray-50 focus:outline-none focus:ring-0 placeholder-transparent"
            placeholder=" "
            required
          />
          {(phoneError || phoneZodError) && <p className="text-red-500 text-xs mt-1 ml-4 pb-2">{phoneError || phoneZodError}</p>}
        </div>

        {/* Bedrijfsnaam Input */}
        <div 
          className={`
            group relative bg-black
            border-t border-b border-border 
            transition-all duration-200 ease-in-out
            ${isBedrijfsnaamFocused ? 'border-l-2 border-l-white' : 'border-l-transparent'}
          `}
        >
          <label
            htmlFor={bedrijfsnaamId}
            className={`
              absolute left-4 transition-all duration-200 ease-in-out pointer-events-none
              ${isBedrijfsnaamLabelFloating ? 'top-1.5 text-xs text-white' : 'top-1/2 -translate-y-1/2 text-base text-white'}
              group-focus-within:top-1.5 group-focus-within:text-xs group-focus-within:text-white
            `}
          >
            Bedrijfsnaam <span className="text-gray-400 ml-0.5">(optioneel)</span>
          </label>
          <input
            id={bedrijfsnaamId}
            type="text"
            name="bedrijfsnaam"
            value={bedrijfsnaamValue}
            onChange={handleBedrijfsnaamChange}
            onFocus={handleBedrijfsnaamFocus}
            onBlur={handleBedrijfsnaamBlur}
            className="w-full bg-transparent pt-8 pb-4 pl-4 pr-4 text-gray-50 focus:outline-none focus:ring-0 placeholder-transparent"
            placeholder=" "
          />
        </div>
      </div>
      
      {serverErrorMessage && (
        <div className="bg-red-900/50 border border-red-700 text-red-300 text-sm py-3 px-4 -mt-px">
          {serverErrorMessage}
        </div>
      )}

      {formState.success && (
        <div className="absolute inset-0 bg-black flex flex-col justify-center items-center text-center p-4 border-t border-b border-border">
          <h3 className="text-xl font-semibold text-white">Bedankt!</h3>
          <p className="text-gray-300 mt-2">{formState.message}</p>
        </div>
      )}

      <div className="group relative w-full overflow-hidden border-b border-border">
        <SubmitButtonChild isFormInvalid={isFormInvalid} />
      </div>
    </form>
  );
} 