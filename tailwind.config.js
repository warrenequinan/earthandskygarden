/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D3F4A",
        secondary: "#B1D4CA",
        muted: {
          100: "#DEDEDE",
          200: "#6C757D",
        },
        accent: {
          700: "#FF9C34",
          800: "#F49531",
        },
        darker: "#6D6962",
      },
    },
  },
  plugins: [],
};
