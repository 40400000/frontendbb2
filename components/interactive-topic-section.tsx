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
      "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/inzicht-wMrslhEeyKX4GYOCf8NL2fWwpTcyld.png",
    ],
  },
  Tools: {
    title: "Tools",
    description: "Krachtige tools voor data-analyse en optimalisatie.",
    images: [
      "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/tools-6sy0y8dPzYxBK8gpnZccwPbmGdvsL7.png",
    ],
  },
  Automatisering: {
    title: "Automatisering",
    description: "Automatiseer taken en focus op groei.",
    images: [
      "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/automatisering%20overzicht-FH6UYZfKu7HL4kOfaKtZRN7Ly0FQqG.png"
    ],
  },
  Tracking: {
    title: "Tracking",
    description: "Volg uw producten en keywords nauwkeurig.",
    images: [
      "https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/tracking-QnWkZ19t2pN2FKO0Lr7pl3237LjxMZ.png",
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
    <section className="relative w-full"> {/* Added relative, padding. Removed w-screen, positioning, bg, border */}
      {/* Full-width background element */}
      <div className="absolute inset-0 w-screen bg-black  -z-10 left-1/2 -translate-x-1/2"></div>

      {/* Container centers content normally ON TOP of the background */}
      <div className="container px-0 relative z-80"> {/* Added relative */}
        <div className="grid grid-cols-1 md:grid-cols-4 min-h-[60vh] md:items-start">

          {/* Left Column (Navigation) - Removed flex layout */}
          <div className="md:col-span-1"> {/* Removed flex flex-col h-full */}
            {/* Topics List Container - Re-added matching top padding for md+ */}
            <div className="space-y-4 pt-8 md:pt-8 lg:pt-16 md:pl-0"> {/* Re-added md:pt-8 lg:pt-16 */}
              {topics.map((topic) => (
                <p
                  key={topic}
                  onMouseEnter={() => handleMouseEnter(topic)}
                  className={`text-5xl lg:text-6xl font-semibold cursor-pointer transition-colors duration-200 ${
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
          <div className="md:col-span-3 border-border">
            {/* Inner wrapper for padding */}
            <div className="lg:p-16">
              {/* Content wrapper for animation - ADD relative and z-[60] */}
              <div 
                key={animationKey} 
                className={`relative z-[60] transition-opacity duration-1000 ease-in-out ${opacityClass}`}
              >
                {/* Conditionally render image or placeholder */}
                {currentContent.images && currentContent.images.length > 0 ? (
                  // Container for the single image
                  <div className="relative mt-8 min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
                    {/* Single image layout - centered */}
                    <div className="absolute -top-32 left-[50%] sm:left-[65%] transform -translate-x-1/2 w-full max-w-full sm:max-w-4xl rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src={currentContent.images[0]} // Always use the first (and only) image
                        alt={`${currentContent.title} screenshot`}
                        width={900}
                        height={700}
                        quality={85}
                        className="object-cover w-full h-auto"
                        priority={true} // Prioritize the visible image
                      />
                    </div>
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