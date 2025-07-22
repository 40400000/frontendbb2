"use client";

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export function BlogThemeHandler() {
  const { setTheme, theme: currentTheme } = useTheme();
  const originalThemeRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    // 1. Store the original theme when the component mounts
    if (originalThemeRef.current === undefined) {
      originalThemeRef.current = currentTheme;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // 2. Function to apply system theme
    const applySystemTheme = (isDark: boolean) => {
      setTheme(isDark ? 'dark' : 'light');
    };

    // 3. Apply theme on initial load for the blog page
    applySystemTheme(mediaQuery.matches);

    // 4. Listen for system theme changes
    const handleChange = (e: MediaQueryListEvent) => {
      applySystemTheme(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);

    // 5. Cleanup function to run when the component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      // Restore the original theme when navigating away from the blog
      if (originalThemeRef.current) {
        setTheme(originalThemeRef.current);
      }
    };
  }, [setTheme, currentTheme]);

  return null; // This component does not render anything
} 