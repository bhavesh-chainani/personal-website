/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9dfff',
          300: '#7cc8ff',
          400: '#36b0ff',
          500: '#0c96f1',
          600: '#0077ce',
          700: '#0060a7',
          800: '#05508a',
          900: '#0a4372',
        },
        secondary: {
          50: '#effcfa',
          100: '#c9f5ee',
          200: '#94ebe0',
          300: '#5cd9cc',
          400: '#33c2b6',
          500: '#1ea89c',
          600: '#16867e',
          700: '#156b67',
          800: '#155553',
          900: '#134846',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'blob': 'blob 18s ease-in-out infinite',
        'blob-delay': 'blob 22s ease-in-out infinite 3s',
        'marquee': 'marquee 32s linear infinite',
        'marquee-reverse': 'marqueeReverse 32s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(4%, 6%) scale(1.08)' },
          '50%': { transform: 'translate(-3%, 3%) scale(0.95)' },
          '75%': { transform: 'translate(3%, -4%) scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}