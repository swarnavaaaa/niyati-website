/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          petalFrost: '#FFD6FF',
          mauveLight: '#E7C6FF',
          mauve: '#C8B6FF',
          periwinkle: '#B8C0FF',
          periwinkleSoft: '#BBD0FF',
          base: '#FFD6FF',
          surface: '#FFFFFF',
          surfaceWarm: '#FAF6FE',
          surfaceAlt: '#E7C6FF',
          primary: '#C8B6FF',
          pop: '#7C3AED',
          hover: '#B8C0FF',
          heading: '#1E1A2B',
          body: '#3A3347',
          border: '#1E1A2B',
          borderLight: '#D9CCF1',
        },
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
      },
    },
  },
  plugins: [],
};
