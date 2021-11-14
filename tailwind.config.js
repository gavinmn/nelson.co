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
      },
      textColor: {
        primary: "hsl(0, 0%, 100%)",
        secondary: "hsl(224, 25%, 80%)",
        tertiary: "hsl(224, 25%, 56%)",
      },
      gridTemplateColumns: {
        "20-80": "20% 80%",
        "118-auto": "118px auto",
      },
    },
    fontFamily: {
      sans: ["Sohne", "sans-serif"],
    },
    maxWidth: {
      "container-large": "612px",
      "container-small": "92%",
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
          "text-decoration-color": "hsl(224, 25%, 26%)",
        },
      }
      addUtilities(extendUnderline)
    },
  ],
}
