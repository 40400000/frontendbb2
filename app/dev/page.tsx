"use client";

import type { Metadata } from "next";
import { Animatedbadge } from "@/components/animatedbadge";
import { ProductListing } from "@/components/product-listing";
import ConicGradientAnimation from "./conic-gradient-animation";


export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Product Listing Demo
          </h1>
        </div>
        
        {/* Product Listing Component */}
        <ProductListing />
        
        {/* Original Animated Badges */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Original Components
          </h2>
          <div className="flex gap-4 justify-center items-center flex-wrap">
            <Animatedbadge />
            <Animatedbadge label="POPULAR" />
          </div>
        </div>

        {/* Conic Gradient Animation Component */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Conic Gradient Animation
          </h2>
          <div className="flex gap-8 justify-center items-center flex-wrap">
            <div className="w-64 h-32">
              <ConicGradientAnimation
                text="Rotating border"
                borderColor="#ff00ff"
                animationDuration={6}
                borderRadius={12}
              />
            </div>
            <div className="w-48 h-24">
              <ConicGradientAnimation
                text="Fast spin"
                borderColor="#00ff00"
                animationDuration={2}
                borderRadius={20}
                blurRadius={3}
              />
            </div>
            <div className="w-80 h-20">
              <ConicGradientAnimation
                text="Wide rotating border"
                borderColor="#0080ff"
                animationDuration={8}
                borderRadius={8}
                backgroundColor="rgba(0, 0, 0, 0.1)"
                overlayBorderColor="#0080ff"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


