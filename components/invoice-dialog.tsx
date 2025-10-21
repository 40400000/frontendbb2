"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EmailSignupForm } from "@/components/email-signup-form";
import { AnimatedHeroBackground } from "@/components/animated-hero-background";
import { X, Download, Loader2 } from "lucide-react";
import Image from "next/image";
import { KiteIcon } from "@/components/ui/kite-icon";
import { FaCircleCheck } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { useRouter } from "next/navigation";

interface InvoiceDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
  isDownloading: boolean;
  isReady?: boolean;
}

export function InvoiceDialog({ isOpen, onClose, onDownload, isDownloading, isReady = false }: InvoiceDialogProps) {
  const [animationPhase, setAnimationPhase] = useState<'creating' | 'ready'>('creating');
  const [email, setEmail] = useState("");
  const router = useRouter();

  // Update animation phase based on actual processing state
  useEffect(() => {
    if (isOpen) {
      if (isReady) {
        setAnimationPhase('ready');
      } else {
        setAnimationPhase('creating');
      }
    }
  }, [isOpen, isReady]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const encodedEmail = encodeURIComponent(email);
      const url = `https://app.baasy.nl/registreren?email=${encodedEmail}`;
      
      const gtag = window.gtag;
      if (typeof gtag === "function") {
        gtag("event", "conversion", {
          send_to: "AW-17372857270/1maandcta",
          event_callback: () => {
            router.push(url);
          },
        });
      } else {
        router.push(url);
      }
    }
  };

  const handleDownload = () => {
    onDownload();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} // Very light background overlay
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[80vh] overflow-hidden relative"
        >
          {/* Close button */}
          <Button
            onClick={onClose}
            variant="outline"
            size="sm"
            className="absolute top-4 right-4 z-10 rounded-xl hover:cursor-pointer"
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Content */}
          <div className="flex flex-col lg:flex-row min-h-[500px]">
            {/* Left Side - Email Signup */}
            <div className="lg:w-1/2 p-6 flex flex-col justify-center">
              <div className="max-w-sm mx-auto lg:mx-0">
                {/* Top Text with Kite Icon */}
                <div className="flex items-center gap-2 mb-3">
                  <KiteIcon variant="blue" size={10} />
                  <span className="text-[10px] leading-[12px] font-normal text-[#111111] tracking-wide uppercase">
                    Automatisering
                  </span>
                </div>

                {/* Main Title */}
                <h3 className="text-2xl font-normal text-[#111111] tracking-tight mb-4">
                  Nooit meer handmatig facturen maken?
                </h3>

                {/* Features List */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="text-[#111111] text-sm flex-shrink-0" />
                    <span className="text-sm font-normal text-[#111111]/70">
                      E-mail automatisering
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="text-[#111111] text-sm flex-shrink-0" />
                    <span className="text-sm font-normal text-[#111111]/70">
                      Factuur automatisering
                    </span>
                  </div>
                </div>
                
                <form onSubmit={handleEmailSubmit} className="space-y-3">
                  <div className="flex flex-col md:flex-row items-stretch md:items-center rounded-2xl border border-[#111111]/8 p-1.5 bg-white transition-all focus-within:border-[#111111]/20">
                    <Input
                      type="email"
                      placeholder="Vul je bedrijfsemail in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-grow h-10 border-none bg-transparent px-4 placeholder:text-[#111111]/60 focus:outline-none text-[#111111] mb-2 md:mb-0"
                    />
                    <Button 
                      type="submit"
                      className="h-10 rounded-2xl bg-[#111111] px-4 text-white hover:bg-black/80 text-sm font-medium cursor-pointer w-full md:w-auto hover:cursor-pointer"
                    >
                      Demo proberen
                    </Button>
                  </div>
                  
                  <div className="mt-4 flex flex-col md:flex-row items-center justify-start gap-2 md:gap-2 text-sm opacity-70">
                    <div className="flex items-center gap-2">
                      <FaGoogle className="h-4 w-4 text-[#111111]" />
                      <div className="flex items-center gap-0.5">
                        <IoStar className="h-4 w-4 text-[#111111]" />
                        <IoStar className="h-4 w-4 text-[#111111]" />
                        <IoStar className="h-4 w-4 text-[#111111]" />
                        <IoStar className="h-4 w-4 text-[#111111]" />
                        <IoStar className="h-4 w-4 text-[#111111]" />
                      </div>
                    </div>
                    <span className="text-[#111111]/30 hidden md:inline">|</span>
                    <span className="text-[#111111]">Tevreden partners</span>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Side - Animated Background with Invoice Animation */}
            <div className="lg:w-1/2 relative overflow-hidden">
              <AnimatedHeroBackground 
                color1="59,130,246"
                color2="147,197,253" 
                color3="219,234,254"
                className="w-full h-full"
              />
              
              {/* White overlay with animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mx-4 shadow-xl"
                >
                  <AnimatePresence mode="wait">
                    {animationPhase === 'creating' ? (
                      <motion.div
                        key="creating"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center"
                      >
                        <div className="mb-4">
                          <Image
                            src="/iconnavbar-mode2.png"
                            alt="Creating invoice"
                            width={40}
                            height={40}
                            className="mx-auto filter invert"
                          />
                        </div>
                        <motion.h4
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="text-lg font-semibold text-[#111111] mb-2"
                        >
                          Factuur aan het maken
                        </motion.h4>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                          className="flex items-center justify-center gap-2 text-gray-600"
                        >
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Even geduld...</span>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="ready"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="text-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 10 }}
                          className="mb-4"
                        >
                          <Image
                            src="/iconnavbar-mode2.png"
                            alt="Invoice ready"
                            width={40}
                            height={40}
                            className="mx-auto filter invert"
                          />
                        </motion.div>
                        <motion.h4
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-lg font-semibold text-[#111111] mb-4"
                        >
                          Klaar voor download
                        </motion.h4>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <Button
                            onClick={handleDownload}
                            disabled={isDownloading}
                            className="bg-[#111111] hover:bg-black/80 text-white px-5 py-2 rounded-xl text-sm cursor-pointer hover:cursor-pointer"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            {isDownloading ? 'Downloaden...' : 'Download factuur'}
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
