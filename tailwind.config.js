/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Standardized Dark Backgrounds
        // PRIMARY: slate-900 (dark:bg-slate-900)
        // SECONDARY: slate-800 (dark:bg-slate-800)
        gray: {
          DEFAULT: 'rgb(var(--app-gray-default) / <alpha-value>)',
          // ... (existing gray shades)
        },
      },
      // ... (existing animations)
    },
  },
  plugins: [],
};

// Ref :: https://twitter.com/steventey/status/1677339375645126659
// Ref :: https://tailwindcss.com/docs/customizing-colors#using-css-variables
