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
        bounceLogo: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },
      },
      animation: {
        truckAnim: "truckLoop 350ms linear",
        bounceLogo: "bounceLogo 0.4s ease-in-out infinite",
      },
      colors: {
        primary: "#0D3F4A",
        secondary: {
          100: "#B0D9B1",
          200: "#546F74",
          300: "#204B54",
        },
        muted: {
          100: "#f9f9f9",
          200: "#f1f1f1",
          300: "#e3e3e3",
          400: "#DEDEDE",
          500: "#e9e9e9",
          600: "#D2D2D2",
          700: "#6C757D",
        },
        brown: {
          100: "#FFE4AF",
        },
        accent: {
          600: "#FFC180",
          700: "#FF8433",
          800: "#F47827",
        },
        darker: "#6D6962",
      },
    },
  },
  plugins: [],
};
