/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#F0F6F5',
          100: '#DFECEB',
          200: '#BDDAD8',
          300: '#94C1BD',
          400: '#4D9993',
          500: '#2A6F6A',
          600: '#1F5753',
          700: '#194B4E', // signature deep serene teal/forest
          800: '#133A3C',
          900: '#0E282A',
        },
        sage: {
          50: '#F4F7F5',
          100: '#E8EFEA',
          200: '#D2DFD6',
          300: '#B2C9BC',
          400: '#7B9E8C',
          500: '#527965', // signature sage green
          600: '#436554',
          700: '#344F41',
          800: '#263930',
          900: '#1A2721',
        },
        terracotta: {
          50: '#FAF4F1',
          100: '#F5E6DE',
          200: '#ECCDC0',
          300: '#E0B09E',
          400: '#CE8B74',
          500: '#C67D63', // warm clay / blush
          600: '#AD634B',
          700: '#8A4834',
        },
        powder: {
          50: '#F4F8FA',
          100: '#E8F2F7',
          200: '#CFE3ED',
          300: '#BDDBE7', // humraahi serene sky blue
          400: '#95BED1',
          500: '#6FA1BA',
        },
        linen: {
          50: '#FCFAF7',
          100: '#FAF8F5', // warm canvas background
          200: '#F3EFE9',
          300: '#E9E2D8',
          400: '#DDD4C8',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"EB Garamond"', 'Georgia', 'serif'],
        garamond: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', '"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
      },
      boxShadow: {
        subtle: '0 2px 10px rgba(25, 75, 78, 0.04), 0 1px 3px rgba(25, 75, 78, 0.02)',
        card: '0 8px 30px rgba(25, 75, 78, 0.05)',
        elevated: '0 20px 40px rgba(25, 75, 78, 0.08)',
      },
    },
  },
  plugins: [],
};
