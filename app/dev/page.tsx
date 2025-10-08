"use client";

import type { Metadata } from "next";
import { Animatedbadge } from "@/components/animatedbadge";
import { ProductListing } from "@/components/product-listing";


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
      </div>
    </main>
  );
}


