/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Ensure this is included if you use the src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"], // Added fallback font
      },
    },
  },
  plugins: [],
}
