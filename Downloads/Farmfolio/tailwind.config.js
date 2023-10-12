/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#897979",
          "200": "#111",
        },
        whitesmoke: "#f0f0f0",
        black: "#000",
        gainsboro: "#e6e6e6",
        pink: "#e1b8b8",
        silver: "#c1c1c1",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
      },
    },
    fontSize: {
      "5xl": "24px",
      "33xl": "52px",
      "13xl": "32px",
      base: "16px",
      sm: "14px",
      xl: "20px",
      "23xl": "42px",
      lgi: "19px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
