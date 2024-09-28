/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '470px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
      '3xl': '2160px',
    },
    extend: {
      colors: {
        main: 'rgba(94, 234, 212, 1)',
      },
      spacing: {
        lg3: 'calc(20.70588px + 3.52941vw)',
        md1: 'calc(17.64706px + .73529vw)',
      },
      fontSize: {
        '2xl': [
          'calc(40.64706px + .73529vw)',
          {
            lineHeight: '1',
          },
        ],
      },
      transitionProperty: {
        background: 'background-color',
        'max-height': 'max-height',
        padding: 'padding',
        border: 'border',
      },
    },
  },
  plugins: [],
};
