import type { Config } from "tailwindcss"
import fontFamily from "tailwindcss/defaultTheme"

const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    extend: {
      borderRadius: {
        'xl': '0.875rem', // 14px - slightly more rounded than default 0.75rem (12px)
      },
      fontFamily: {
        'inter': ['var(--font-inter)', ...fontFamily.fontFamily.sans],
      }
    }
  }
}

export default config