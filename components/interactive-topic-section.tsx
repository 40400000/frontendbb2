'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Next Image
import { Button } from "@/components/ui/button";
import { MdOutlineArrowOutward } from "react-icons/md";

// Define the structure for topic content (optional, but good practice)
interface TopicContent {
  title: string;
  description: string;
  images?: string[]; // Add optional images array
  // Add other fields like image URLs later
}

// Example content map (replace with actual data fetching or props later)
const topicDetails: Record<string, TopicContent> = {
  Inzichten: {
    title: "Inzichten",
    description: "Gedetailleerde inzichten in uw Bol.com prestaties.",
    images: [
      "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/groeibaaswebsite/INZICHT1-Gdmx0xqQajbDJmgfd1rPhuuT0sL5t9.png",
      "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/groeibaaswebsite/INZICHT2-Qi1AvDWA7f3P8EUfM3MIsHevp7c9hm.png",
    ],
  },
  Tools: {
    title: "Tools",
    description: "Krachtige tools voor data-analyse en optimalisatie.",
    images: [
      "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/HERO2-TaFELc5XTx6Q6Uuzhyg3K7vko9IG0I.png",
      "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/tracking2-lK9UFloMsC4AMxQxBSOdiAWIu1ozuW.png",
      "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/tracking3-TpOAH71NIBF2dSpRuIdvoP7bHDEwoy.png",
    ],
  },
  Automatisering: {
    title: "Automatisering",
    description: "Automatiseer taken en focus op groei.",
    images: [
      "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/AUTOMATISERING-6fiAE4EiwtW5Bnvhg3hySS0e6F4szH.png"
    ], // Add image URL
  },
  Tracking: {
    title: "Tracking",
    description: "Volg uw producten en keywords nauwkeurig.",
    images: [
      "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/tracking1-XgvFKJKg3g2IkQ3zn7EzKgAaml8iB1.png",
      "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/tracking2-lK9UFloMsC4AMxQxBSOdiAWIu1ozuW.png",
      "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/tracking3-TpOAH71NIBF2dSpRuIdvoP7bHDEwoy.png",
    ],
  },
};

export function InteractiveTopicSection() {
  const topics = Object.keys(topicDetails);
  const [selectedTopic, setSelectedTopic] = useState<string>(topics[0]);
  const [animationKey, setAnimationKey] = useState(0);
  const [opacityClass, setOpacityClass] = useState('opacity-100'); // Start opaque initially

  const currentContent = topicDetails[selectedTopic];

  const handleMouseEnter = (topic: string) => {
    // Update state only if the topic is different
    if (topic !== selectedTopic) {
      setSelectedTopic(topic);
      setAnimationKey(prev => prev + 1);
      // Opacity will be handled by useEffect
    }
  };

  // Effect to handle opacity transition on key change
  useEffect(() => {
    // Skip initial mount animation if desired, but let's animate always for now
    // Set to transparent when key changes
    setOpacityClass('opacity-0');

    // Schedule transition back to opaque after a tiny delay
    const timer = setTimeout(() => {
      setOpacityClass('opacity-100');
    }, 10); // 10ms delay

    // Cleanup timeout if component unmounts or key changes again before timeout fires
    return () => clearTimeout(timer);
  }, [animationKey]); // Re-run effect when animationKey changes

  return (
    // Section is relative positioning context with vertical padding
    <section className="relative w-full py-16 md:py-24 lg:py-32"> {/* Added relative, padding. Removed w-screen, positioning, bg, border */}
      {/* Full-width background element */}
      <div className="absolute inset-0 w-screen bg-black  -z-10 left-1/2 -translate-x-1/2"></div>

      {/* Container centers content normally ON TOP of the background */}
      <div className="container relative px-0"> {/* Added relative */}
        <div className="grid grid-cols-1 md:grid-cols-4 min-h-[60vh] md:items-start">

          {/* Left Column (Navigation) - Removed flex layout */}
          <div className="md:col-span-1"> {/* Removed flex flex-col h-full */}
            {/* Topics List Container - Re-added matching top padding for md+ */}
            <div className="space-y-4 pt-8 pl-8 md:pt-8 lg:pt-16 md:pl-0"> {/* Re-added md:pt-8 lg:pt-16 */}
              {topics.map((topic) => (
                <p
                  key={topic}
                  onMouseEnter={() => handleMouseEnter(topic)}
                  className={`text-3xl lg:text-4xl font-semibold cursor-pointer transition-colors duration-200 ${
                    selectedTopic === topic
                      ? 'text-foreground' // Style for selected item
                      : 'text-muted-foreground hover:text-foreground/80' // Style for non-selected items
                  }`}
                >
                  {topic}
                </p>
              ))}
            </div>
            {/* Schedule Button Container - Positioned independently with padding top */}
            <div className="pt-16 pb-8 pl-8 md:pb-8 md:pl-0"> {/* Removed mt-auto, added pt-16 */}
              <Button variant="ghost" className="justify-start p-0 h-auto text-lg hover:bg-transparent text-muted-foreground hover:text-foreground">
                Schedule a demo
                <MdOutlineArrowOutward className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Column (Content Display) */}
          <div className="md:col-span-3 border-t md:border-t-0 md:border-l border-border">
            {/* Inner wrapper for padding */}
            <div className="p-8 lg:p-16">
              {/* Content wrapper for animation - ADD relative and z-[60] */}
              <div 
                key={animationKey} 
                className={`relative z-[60] transition-opacity duration-1000 ease-in-out ${opacityClass}`}
              >
                {/* Conditionally render images or placeholder */}
                {currentContent.images && currentContent.images.length > 0 ? (
                  // Container for images
                  <div className="relative mt-8 min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
                    {/* Specific layout for Tracking with 3 images - REMOVE z-[60] */}
                    {selectedTopic === 'Tracking' && currentContent.images.length === 3 && (
                      <>
                        {/* Image 1 (Large, Right) */}
                        <div className="absolute -top-16 right-0 w-full max-w-3xl border border-neutral-800 rounded-lg overflow-hidden shadow-xl transform translate-x-1/4">
                          <Image src={currentContent.images[0]} alt="Tracking screenshot 1" width={900} height={700} quality={85} className="object-cover w-full h-auto" />
                        </div>
                        {/* Image 2 (Smaller, Left Top) */}
                        <div className="absolute -top-8 -left-8 w-[50%] max-w-sm border border-neutral-800 rounded-lg overflow-hidden shadow-xl">
                          <Image src={currentContent.images[1]} alt="Tracking screenshot 2" width={600} height={450} quality={85} className="object-cover w-full h-auto" />
                        </div>
                        {/* Image 3 (Smaller, Left Bottom) */}
                        <div className="absolute top-48 -left-8 w-[50%] max-w-sm border border-neutral-800 rounded-lg overflow-hidden shadow-xl">
                          <Image src={currentContent.images[2]} alt="Tracking screenshot 3" width={600} height={450} quality={85} className="object-cover w-full h-auto" />
                        </div>
                      </>
                    )}

                    {/* Layout for Inzichten with 2 images - REMOVE z-[60] */}
                    {selectedTopic === 'Inzichten' && currentContent.images.length === 2 && (
                      <>
                        {currentContent.images.map((imgSrc, index) => (
                          <div
                            key={index}
                            className={`absolute w-full max-w-3xl border border-neutral-800 rounded-lg overflow-hidden shadow-xl ${
                              index === 0 
                                ? '-top-24 left-0' 
                                : 'top-4 right-0 transform translate-x-1/2'
                            }`}
                          >
                            <Image src={imgSrc} alt={`${currentContent.title} screenshot ${index + 1}`} width={800} height={600} quality={85} className="object-cover w-full h-auto" />
                          </div>
                        ))}
                      </>
                    )}
                    
                    {/* Layout for Automatisering with 1 image - REMOVE z-[60] */}
                    {selectedTopic === 'Automatisering' && currentContent.images.length === 1 && (
                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-full max-w-3xl border border-neutral-800 rounded-lg overflow-hidden shadow-xl">
                        <Image src={currentContent.images[0]} alt="Automatisering screenshot" width={900} height={700} quality={85} className="object-cover w-full h-auto" />
                      </div>
                    )}
                    
                    {/* Layout for Tools with 3 images (similar to Tracking) - REMOVE z-[60] */}
                    {selectedTopic === 'Tools' && currentContent.images.length === 3 && (
                      <>
                        {/* Image 1 (Large, Right) */}
                        <div className="absolute -top-16 right-0 w-full max-w-3xl border border-neutral-800 rounded-lg overflow-hidden shadow-xl transform translate-x-1/4">
                          <Image src={currentContent.images[0]} alt="Tools screenshot 1" width={900} height={700} quality={85} className="object-cover w-full h-auto" />
                        </div>
                        {/* Image 2 (Smaller, Left Top) */}
                        <div className="absolute -top-8 -left-8 w-[50%] max-w-sm border border-neutral-800 rounded-lg overflow-hidden shadow-xl">
                          <Image src={currentContent.images[1]} alt="Tools screenshot 2" width={600} height={450} quality={85} className="object-cover w-full h-auto" />
                        </div>
                        {/* Image 3 (Smaller, Left Bottom) */}
                        <div className="absolute top-48 -left-8 w-[50%] max-w-sm border border-neutral-800 rounded-lg overflow-hidden shadow-xl">
                          <Image src={currentContent.images[2]} alt="Tools screenshot 3" width={600} height={450} quality={85} className="object-cover w-full h-auto" />
                        </div>
                      </>
                    )}
                    
                    {/* Fallback/Generic layout for other topics with images if needed - can be added here */}

                  </div>
                ) : (
                  // Placeholder when no images are available
                  <div className="mt-8 p-4 border border-dashed border-border rounded-lg min-h-[350px] flex items-center justify-center bg-muted/20">
                    <p className="text-muted-foreground">Content Area for {currentContent.title}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 