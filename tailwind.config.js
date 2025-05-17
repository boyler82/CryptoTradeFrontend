/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937',
        secondary: '#374151',
        accent: '#2563eb',
        muted: '#6b7280',
        danger: '#ef4444',
        success: '#10b981',
        background: '#f9fafb',
        surface: '#ffffff',
        onPrimary: '#ffffff',
        onSecondary: '#e5e7eb',
        onBackground: '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        button: '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        DEFAULT: '250ms',
      },
      dropShadow: {
        glow: '0 0 10px #00ffff',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [typography],
};