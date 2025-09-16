/**
 * Utility functions for managing section themes (light/dark) for navbar detection
 */

/**
 * Creates props for a dark section that will trigger navbar dark mode
 */
export function darkSection(className: string = '') {
  return {
    'data-dark-section': 'true',
    className: `${className}`.trim(),
  };
}

/**
 * Creates props for a light section (default behavior)
 */
export function lightSection(className: string = '') {
  return {
    className: `${className}`.trim(),
  };
}

/**
 * Helper to conditionally apply dark or light section
 */
export function section(isDark: boolean, className: string = '') {
  return isDark ? darkSection(className) : lightSection(className);
}
