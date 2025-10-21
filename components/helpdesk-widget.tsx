"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, MessageCircle } from "lucide-react";

export function HelpdeskWidget() {
  const [showMessage, setShowMessage] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [showContactWidget, setShowContactWidget] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyping(true);
      
      // Show typing animation for 2 seconds, then show message
      const messageTimer = setTimeout(() => {
        setShowTyping(false);
        setShowMessage(true);
      }, 2000);

      return () => clearTimeout(messageTimer);
    }, 4000); // Show after 4 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleWidgetClick = () => {
    setShowContactWidget(!showContactWidget);
  };

  // Only show on pricing page
  if (pathname !== '/prijzen') {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
        {/* Chat bubble with message */}
        {(showTyping || showMessage) && (
          <div className="mb-4 flex items-end space-x-3">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 max-w-xs animate-in slide-in-from-bottom-2 duration-300 cursor-pointer hover:shadow-xl transition-all group relative" onClick={handleWidgetClick}>
              <p className="text-sm text-gray-700">
              Vragen over abonnementen of functies? We helpen je graag! 👋
              </p>
              {/* Subtle hint */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 cursor-pointer hover:scale-105 transition-transform" onClick={handleWidgetClick}>
              <Image
                src="/helpdeskimg.png"
                alt="Helpdesk"
                fill
                className="object-cover"
                sizes="40px"
              />
              {/* Typing dots on bottom left of image */}
              {showTyping && (
                <div className="absolute -bottom-1 -left-1 bg-white rounded-full p-1 shadow-sm">
                  <div className="flex space-x-0.5">
                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Contact Widget */}
        {showContactWidget && (
          <div className="mb-4 bg-white rounded-2xl shadow-lg border border-gray-200 p-4 w-64 animate-in slide-in-from-bottom-2 duration-300">
            <div className="space-y-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/31613665348"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-green-500" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">WhatsApp</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+31613665348"
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <Phone className="h-5 w-5 text-gray-600" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">+31 6 13665348</div>
                  <div className="text-xs text-gray-500">(8:00 - 22:00)</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@baasy.nl"
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <Mail className="h-5 w-5 text-gray-600" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">info@baasy.nl</div>
                </div>
              </a>
            </div>
          </div>
        )}
    </div>
  );
}
