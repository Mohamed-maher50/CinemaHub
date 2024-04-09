/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        movie: {
          primary: "#020916",
          secondary: "#151F2E",
          "base-100": "#B6B8C4",
          "base-orange": "#FFD32E",
        },
      },
    ],
  },
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
