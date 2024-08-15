/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
        scaleDown: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.5)' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-360deg)' },
          '100%': { transform: 'rotate(0)' },
        },
        rotateOut: {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounceIn: {
          '0%, 100%': { transform: 'scale(0.9)', opacity: '0' },
          '50%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.9)', opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
        slideIn: 'slideIn 0.5s ease-in-out',
        slideOut: 'slideOut 0.5s ease-in-out',
        scaleUp: 'scaleUp 0.5s ease-in-out',
        scaleDown: 'scaleDown 0.5s ease-in-out',
        rotateIn: 'rotateIn 0.5s ease-in-out',
        rotateOut: 'rotateOut 0.5s ease-in-out',
        bounceIn: 'bounceIn 0.5s ease-in-out',
        bounceOut: 'bounceOut 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}

