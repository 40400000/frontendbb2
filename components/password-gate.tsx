"use client"

import React, { useState } from 'react';
import Image from "next/image";
import { ALLOWED_PASSWORDS } from '@/lib/passwords';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

export default function PasswordGate() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="min-h-screen flex" style={{ "--background": "0 0% 7.84%" } as React.CSSProperties}>
      {/* Left side - Password form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-black">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">Bolbaas komt binnenkort</h1>
            <p className="text-white mt-2">Dank voor je interesse in Bolbaas. Op dit moment is de website alleen beschikbaar voor uitgenodigde partners.</p>
          </div>

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
              className="w-full bg-white text-black hover:bg-zinc-200"
              disabled={loading}
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : "Verstuur"}
            </Button>
          </form>
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