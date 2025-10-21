"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoStar } from "react-icons/io5";
import { ShoppingBag } from "lucide-react";

export function Automatiseringanimation() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
 // ee
  const startAnimation = () => {
    setShowNotifications(false);
    setShowReview(false);
    
    const timer1 = setTimeout(() => {
      setShowNotifications(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setShowReview(true);
    }, 3500); // Appears 1.5s after notifications

    // Restart animation after completion (3500ms + 2000ms delay)
    const restartTimer = setTimeout(() => {
      setAnimationKey(prev => prev + 1);
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(restartTimer);
    };
  };

  useEffect(() => {
    const cleanup = startAnimation();
    return cleanup;
  }, [animationKey]);

  return (
    <div className="w-full h-[600px] md:h-[500px] md:aspect-square md:max-h-[500px] from-gray-50 to-gray-100 border-gray-200 rounded-xl relative overflow-visible p-4">
      {/* Chat message layout */}
      <motion.div
        className="flex items-start space-x-3 max-w-sm mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.21, 1.11, 0.81, 0.99]
        }}
      >
        {/* Shopping bag icon on the left */}
        <motion.div
          className="flex-shrink-0 mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.6
          }}
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <ShoppingBag className="w-6 h-6 text-gray-600" />
          </div>
        </motion.div>

        {/* Message content */}
        <motion.div
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex-1"
          initial={{ opacity: 0, x: -10, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ 
            duration: 0.7,
            ease: [0.21, 1.11, 0.81, 0.99]
          }}
        >

          {/* Order content */}
          <motion.div
            className="flex items-center space-x-3 mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/db-4.jpg"
              alt="Gladjanus Bodygroomer V2"
              width={50}
              height={50}
              className="w-12 h-12 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900 mb-0.5">
                Nieuwe bestelling
              </h3>
              <p className="text-xs text-gray-600">
                Gladjanus Bodygroomer V2
              </p>
            </div>
          </motion.div>


        </motion.div>
      </motion.div>

      {/* Arrow pointing to next step */}
      <motion.div
        className="flex justify-center mt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-gray-400">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>

      {/* Second step - Baasy processing */}
      <motion.div
        className="flex items-start space-x-3 max-w-sm mx-auto mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          delay: 0.8
        }}
      >
        {/* Baasy logo on the left */}
        <motion.div
          className="flex-shrink-0 mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.6
          }}
        >
          <Image
            src="/iconnavbar-mode2.png"
            alt="Baasy logo"
            width={40}
            height={40}
            className="w-10 h-10 filter invert"
          />
        </motion.div>

        {/* Processing message content */}
        <AnimatePresence mode="wait">
          {!showNotifications ? (
            <motion.div
              key="processing"
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex-1"
              initial={{ opacity: 0, x: -10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                duration: 0.7,
                ease: [0.21, 1.11, 0.81, 0.99]
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-0.5">
                    Baasy automatisering
                  </h3>
                  <p className="text-xs text-gray-600">
                    Automatisch verwerken van bestelling...
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="notifications"
              className="flex-1 space-y-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Review email notification */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 mb-0.5">
                      Review e-mail verstuurd
                    </h3>
                    <p className="text-xs text-gray-600">
                      Klant heeft positieve review ontvangen
                    </p>
                  </div>
                </div>
              </div>

              {/* Invoice upload notification */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14,2 14,8 20,8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10,9 9,9 8,9" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 mb-0.5">
                      Factuur geüpload naar Bol
                    </h3>
                    <p className="text-xs text-gray-600">
                      Factuur succesvol geüpload naar platform
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Arrow pointing to review step */}
      <AnimatePresence>
        {showReview && (
          <motion.div
            className="flex justify-center mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-gray-400">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Review step */}
      <AnimatePresence>
        {showReview && (
          <motion.div
            className="flex items-start space-x-3 max-w-sm mx-auto mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Customer avatar */}
            <Image
              src="/random1.png"
              alt="Customer"
              width={40}
              height={40}
              className="w-10 h-10 object-cover rounded-full border border-gray-200 mt-1"
            />

            {/* Review message content */}
            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex-1"
              initial={{ opacity: 0, x: -10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                ease: [0.21, 1.11, 0.81, 0.99],
              }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-0.5">
                    Nieuwe review
                  </h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <IoStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-600 italic">"Super product!"</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
