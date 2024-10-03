/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #9F7AEA, #ED64A6, #F6AD55)', // your gradient colors
        'secondary-gradient': 'linear-gradient(to right, #9F7AEA, #ED64A6, #F6AD55)', // your gradient colors
      },
    },
  },
  plugins: [],
};
