/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        truckLoop: {
          "0%": {
            transform: "translateX(0)",
          },

          "70%": {
            transform: "translateX(250px)",
            opacity: "1",
          },

          "71%": {
            transform: "translateX(-80px)",
            opacity: "0",
          },

          "72%": {
            opacity: "1",
          },

          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        truckAnim: "truckLoop 350ms linear",
      },
      colors: {
        primary: "#0D3F4A",
        secondary: {
          100: "#B0D9B1",
        },
        muted: {
          100: "#f9f9f9",
          200: "#f1f1f1",
          300: "#e3e3e3",
          400: "#DEDEDE",
          500: "#D2D2D2",
          600: "#6C757D",
        },
        brown: {
          100: "#FFE4AF",
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
