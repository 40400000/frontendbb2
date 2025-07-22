'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

export function ThemeHandler() {
  const pathname = usePathname();
  const { setTheme } = useTheme();

  useEffect(() => {
    if (!pathname.startsWith('/blog')) {
      setTheme('dark');
    }
  }, [pathname, setTheme]);

  return null;
} 