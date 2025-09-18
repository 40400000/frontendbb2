'use client';

import { useState, useId, useEffect, useActionState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { useFormStatus } from 'react-dom';
import { z } from 'zod';
import { sendAffiliateEmail } from '@/app/actions/send-affiliate-email';

// Zod schema for form validation
const affiliateFormSchema = z.object({
  firstName: z.string().min(1, { message: "Voornaam is verplicht." }),
  lastName: z.string().min(1, { message: "Achternaam is verplicht." }),
  email: z.string().email({ message: "Voer een geldig e-mailadres in." }),
  type: z.string().min(1, { message: "Selecteer je rol." }),
  experience: z.string().min(1, { message: "Selecteer je ervaring." }),
  audience: z.string().min(1, { message: "Selecteer de grootte van je publiek." }),
  message: z.string().optional(),
});

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
      {pending ? 'Bezig met verzenden...' : 'Verstuur aanvraag'}
      <MdOutlineArrowOutward className={`h-4 w-4 ${pending ? 'animate-pulse' : ''}`} />
    </button>
  );
}

export function AffiliateForm() {
  const [state, formAction] = useActionState(sendAffiliateEmail, initialState);

  // Form field states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    type: '',
    experience: '',
    audience: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Generate unique IDs for form fields
  const firstNameId = useId();
  const lastNameId = useId();
  const emailId = useId();
  const typeId = useId();
  const experienceId = useId();
  const audienceId = useId();
  const messageId = useId();

  const validateForm = (): boolean => {
    const result = affiliateFormSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          newErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    const isValid = validateForm();
    if (!isValid) {
      e.preventDefault();
    }
  };

  // Reset form on successful submission
  useEffect(() => {
    if (state.type === 'success') {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        type: '',
        experience: '',
        audience: '',
        message: '',
      });
      setErrors({});
    }
  }, [state.type]);

  const isFormInvalid = Object.keys(errors).length > 0;

  return (
    <form 
      action={formAction} 
      onSubmit={handleSubmit}
      className="space-y-6 relative"
    >
      {/* Form Fields Container */}
      <div className={state.type === 'success' ? 'filter blur-sm pointer-events-none' : 'space-y-6'}>
        
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor={firstNameId} className="block text-sm font-medium text-[#111111] mb-2">
              Voornaam <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id={firstNameId}
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-[#111111]"
              placeholder="Je voornaam"
              required
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>
          
          <div>
            <label htmlFor={lastNameId} className="block text-sm font-medium text-[#111111] mb-2">
              Achternaam <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id={lastNameId}
              name="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-[#111111]"
              placeholder="Je achternaam"
              required
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor={emailId} className="block text-sm font-medium text-[#111111] mb-2">
            Email adres <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id={emailId}
            name="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-[#111111]"
            placeholder="je@email.com"
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Type Field */}
        <div>
          <label htmlFor={typeId} className="block text-sm font-medium text-[#111111] mb-2">
            Ik ben een <span className="text-red-500">*</span>
          </label>
          <select
            id={typeId}
            name="type"
            value={formData.type}
            onChange={(e) => handleInputChange('type', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-[#111111]"
            required
          >
            <option value="">Selecteer je rol</option>
            <option value="coach">Bol coach</option>
            <option value="community">Community manager</option>
            <option value="influencer">Bol influencer</option>
            <option value="other">Anders</option>
          </select>
          {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
        </div>

        {/* Experience Field */}
        <div>
          <label htmlFor={experienceId} className="block text-sm font-medium text-[#111111] mb-2">
            Ervaring met Bol <span className="text-red-500">*</span>
          </label>
          <select
            id={experienceId}
            name="experience"
            value={formData.experience}
            onChange={(e) => handleInputChange('experience', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-[#111111]"
            required
          >
            <option value="">Selecteer je ervaring</option>
            <option value="beginner">Beginner (0-1 jaar)</option>
            <option value="intermediate">Gemiddeld (1-3 jaar)</option>
            <option value="advanced">Gevorderd (3+ jaar)</option>
            <option value="expert">Expert (5+ jaar)</option>
          </select>
          {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
        </div>

        {/* Audience Field */}
        <div>
          <label htmlFor={audienceId} className="block text-sm font-medium text-[#111111] mb-2">
            Grootte van je publiek/community <span className="text-red-500">*</span>
          </label>
          <select
            id={audienceId}
            name="audience"
            value={formData.audience}
            onChange={(e) => handleInputChange('audience', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-[#111111]"
            required
          >
            <option value="">Selecteer grootte</option>
            <option value="small">0-1.000</option>
            <option value="medium">1.000-10.000</option>
            <option value="large">10.000-50.000</option>
            <option value="xlarge">50.000+</option>
          </select>
          {errors.audience && <p className="text-red-500 text-sm mt-1">{errors.audience}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor={messageId} className="block text-sm font-medium text-[#111111] mb-2">
            Vertel ons over jezelf <span className="text-gray-400">(optioneel)</span>
          </label>
          <textarea
            id={messageId}
            name="message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none text-[#111111]"
            placeholder="Vertel ons over je ervaring, je publiek en waarom je affiliate partner wilt worden..."
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <SubmitButtonChild isFormInvalid={isFormInvalid} />
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
            Verstuur nog een aanvraag
          </button>
        </div>
      )}

      {/* Error Message Display */}
      {state.type === 'error' && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-sm text-red-600">
            <span className="font-medium">{state.message}</span>
          </p>
        </div>
      )}
    </form>
  );
}
