'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExpandableSectionProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export function ExpandableSection({ 
  title, 
  subtitle,
  description, 
  icon, 
  children, 
  defaultExpanded = false 
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <>
      {/* Section Header - Clickable */}
      <div 
        className="col-span-2 sm:col-span-4 grid grid-cols-1 border-b border-t border-border bg-gray-50/50 dark:bg-gray-900/30 cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/30 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="p-4 col-span-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{title}</p>
              <div className="flex items-center gap-2">
                {icon}
                <h3 className="text-lg font-semibold">{subtitle}</h3>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            </div>
            <div className="ml-4">
              {isExpanded ? (
                <ChevronUp className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature Rows - Conditionally rendered */}
      {isExpanded && (
        <div className="divide-y divide-border">
          {children}
        </div>
      )}
    </>
  );
} 