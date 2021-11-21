module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "false",
  theme: {
    extend: {
      colors: {
        primary: "hsl(0, 0%, 100%)",
        secondary: "hsl(0, 0%, 100%)",
        background: "hsl(224, 25%, 12%)",
        code: "hsl(224, 25%, 8%)",
        selection: "#FFAB7F",
      },
      textColor: {
        primary: "hsl(0, 0%, 100%)",
        secondary: "hsl(224, 25%, 80%)",
        tertiary: "hsl(224, 25%, 56%)",
      },
      gridTemplateColumns: {
        "20-80": "60% 40%",
        "118-auto": "118px auto",
      },
      height: {
        400: "400px",
      },
    },
    fontFamily: {
      sans: ["Sohne", "sans-serif"],
    },
    maxWidth: {
      "container-large": "612px",
      "container-small": "92%",
    },
    maxHeight: {
      image: "200px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        ".underline": {
          textDecoration: "underline",
          "text-decoration-color": "hsl(224, 25%, 46%)",
        },
      }
      addUtilities(extendUnderline)
    },
  ],
}
