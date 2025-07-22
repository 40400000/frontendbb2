'use client';

import { usePathname } from 'next/navigation';
import { BlogAlertBanner } from './blog-alert-banner';

export function ConditionalBlogBanner() {
  const pathname = usePathname();
  
  // Don't show on blog pages
  if (pathname.startsWith('/blog')) {
    return null;
  }
  
  return <BlogAlertBanner />;
} 