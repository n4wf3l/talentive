/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2F8',
          100: '#D4DFEF',
          200: '#A9BFE0',
          300: '#7E9FD0',
          400: '#537FC1',
          500: '#2860A8',
          600: '#1A4F91',
          700: '#153D73',
          800: '#0F2B5B',
          900: '#0A1D3D',
          950: '#061224',
        },
        accent: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        secondary: {
          50: '#F0FDF0',
          100: '#DCFCDC',
          200: '#BBF7BB',
          300: '#8AEF89',
          400: '#66D364',
          500: '#4ABF48',
          600: '#38A136',
          700: '#2D7F2C',
          800: '#276528',
          900: '#215323',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
