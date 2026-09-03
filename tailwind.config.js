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
          base: '#FDFF6D',
          surface: '#FFFFFF',
          surfaceWarm: '#FFFDE0',
          surfaceAlt: '#FFDE59',
          primary: '#FDFF6D',
          pop: '#FF7F3F',
          hover: '#E5E84A',
          heading: '#1A180E',
          body: '#2D2913',
          border: '#1A180E',
          borderLight: '#E8EA50',
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
