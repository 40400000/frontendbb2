"use client"

import React, { useState, useEffect, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Image from "next/image";
import { ALLOWED_PASSWORDS } from '@/lib/passwords';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Phone, Mail } from "lucide-react";
import { addToWaitlist, AddToWaitlistResponse } from '@/server/actions';
import { ContactStatusDots } from './contact-status-dots';

const initialState: AddToWaitlistResponse = {
  success: false,
  message: '',
};

export default function PasswordGate() {
  const [password, setPassword] = useState('');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  
  const [state, formAction] = useActionState(addToWaitlist, initialState);
  const formRef = React.useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      setWaitlistEmail('');
    }
  }, [state.success]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError('');

    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 500));

    const lowercasedPassword = password.toLowerCase();
    const lowercasedAllowedPasswords = ALLOWED_PASSWORDS.map(p => p.toLowerCase());

    if (lowercasedAllowedPasswords.includes(lowercasedPassword)) {
      document.cookie = 'site-password=' + encodeURIComponent(password) + '; path=/';
      window.location.reload();
    } else {
      setError('Ongeldig wachtwoord. Probeer het opnieuw.');
    }
    setLoading(false);
  }

  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <Button
        type="submit"
        className="w-full bg-white text-black hover:bg-zinc-200 cursor-pointer disabled:cursor-not-allowed"
        disabled={pending || !waitlistEmail.trim()}
      >
        {pending ? <Loader2 size={16} className="animate-spin" /> : "Houd mij op de hoogte"}
      </Button>
    );
  }

  return (
    <div className="min-h-screen flex" style={{ "--background": "0 0% 7.84%" } as React.CSSProperties}>
      {/* Left side - Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-black">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">Bolbaas komt binnenkort</h1>
            <p className="text-white mt-2">Dank voor je interesse in Bolbaas. Op dit moment is de website alleen beschikbaar voor uitgenodigde partners.</p>
          </div>

          <div className="my-8">
            <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-8">
              <div className="flex items-center">
                <Phone strokeWidth={1.4} className="h-4 w-4 mr-2 text-white" />
                <a 
                  href="tel:+31613665348" 
                  className="text-white hover:text-zinc-300 transition-colors text-sm"
                >
                  +31 6 13665348
                </a>
                <ContactStatusDots type="phone" />
              </div>
              {/* <div className="flex items-center">
                <Mail strokeWidth={1.4} className="h-4 w-4 mr-2 text-white" />
                <a 
                  href="mailto:thijmendreef@icloud.com" 
                  className="text-white hover:text-zinc-300 transition-colors text-sm"
                >
                  thijmendreef@icloud.com
                </a>
                <ContactStatusDots type="email" />
              </div> */}
            </div>
          </div>

          {showPasswordForm ? (
            <div>
              <Button
                variant="link"
                className="text-zinc-400 hover:text-white px-0 mb-4 flex items-center gap-2"
                onClick={() => {
                  setShowPasswordForm(false);
                  setError('');
                }}
              >
                &larr; Terug
              </Button>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="password" className="text-zinc-300">
                    Wachtwoord
                  </Label>
                  <Input
                    id="password"
                    type="text"
                    placeholder="Voer wachtwoord in"
                    required
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setPassword(e.target.value);
                      setError(''); // Clear error on new input
                    }}
                    className={`bg-zinc-900/60 text-white border-zinc-800 ${error ? 'border-red-500' : ''}`}
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm" id="credential-error">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-zinc-200 cursor-pointer disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? <Loader2 size={16} className="animate-spin" /> : "Verstuur"}
                </Button>
              </form>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-white">Zet mij op de wachtlijst</h2>
                <form ref={formRef} action={formAction} className="mt-4 flex flex-col gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-zinc-300">
                      E-mailadres
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jouw@email.com"
                      required
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      className="bg-zinc-900/60 text-white border-zinc-800"
                    />
                  </div>
                  <SubmitButton />
                </form>
                {state.message && (
                  <p className={`mt-2 text-sm ${state.success ? 'text-green-400' : 'text-red-500'}`}>
                    {state.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-zinc-700" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-black px-2 text-zinc-400">of</span>
                </div>
              </div>

              <Button
                variant="link"
                className="text-white w-full cursor-pointer"
                onClick={() => setShowPasswordForm(true)}
              >
                Ik ben een uitgenodigde partner →
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 bg-black relative overflow-hidden">
        <Image
          src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/background_shape_auth-MNqtbILaB9OJLklUXRcoNrmh0FvRU4.png"
          alt="Abstract ontwerp"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
} 