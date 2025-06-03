/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A73E8',
          dark: '#1558B7',
        },
        accent: '#FF6D38',
        success: '#34D399',
        warning: '#FBBF24',
        error: '#EF4444',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)' },
          '100%': { transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out',
        fadeInUp: 'fadeInUp 0.6s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
        scaleIn: 'scaleIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
};