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
        // primary: "#fff2cf", 
        primary: "#512361", 
        // secondary: "#8b2711", 
        teritory: "#41b3d3", 
        
        secondary: "#fffff", // Add your primary color here
      
      },
    },
  },
  plugins: [],
};
