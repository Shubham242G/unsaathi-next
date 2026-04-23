/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'unsaathi-bg': '#f5f1ed',
        'unsaathi-brown': '#b88b6c',
        'unsaathi-dark': '#232122',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}