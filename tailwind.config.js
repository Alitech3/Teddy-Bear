/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        Text: '#FFFFFF',
        Background: '#e4e4e4',
        Primary: '#14967f',
        Secondary: '#1579a1',
        Accent: '#6fa9bd',
      }
    }
  },
  plugins: [require('tailwindcss-animate')],
};
