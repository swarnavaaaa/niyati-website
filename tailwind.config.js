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
          base: '#FFC72C',
          surface: '#FFFEF7',
          surfaceWarm: '#FFF6D6',
          surfaceAlt: '#FFEB99',
          primary: '#FFC72C',
          pop: '#FF8A3D',
          hover: '#F5A300',
          heading: '#1F1B0E',
          body: '#352F18',
          border: '#1F1B0E',
          borderLight: '#FFE28A',
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
