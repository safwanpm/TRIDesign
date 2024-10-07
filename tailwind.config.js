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
        'primary-gradient': 'linear-gradient(to right, #9F7AEA, #31346E, #31346E)', // your gradient colors
        'secondary-gradient': 'linear-gradient(to right, #9F7AEA, #ED64A6, #F6AD55)', // your gradient colors
        'zahrat-gradient': 'linear-gradient(to right, #3b5d50,#3b5d50, #31346E)', // your gradient colors
        // 'primary-gradient': 'linear-gradient(to right, #faf0ca, #faf0ca,#0d3b66,#0d3b66)', // your gradient colors
      },
    },
  },
  plugins: [],
};
