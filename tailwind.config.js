module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        background: "hsl(224, 0%, 97%)",
        darkBackground: "hsl(224, 25%, 12%)",
        code: "hsl(224, 25%, 8%)",
        selection: "#FFAB7F",
      },
      textColor: {
        primary: "hsl(224, 25%, 12%)",
        secondary: "hsl(224, 21%, 30%)",
        tertiary: "hsl(224, 25%, 46%)",
        darkTertiary: "hsl(224, 25%, 56%)",
        darkPrimary: "hsl(0, 0%, 100%)",
        darkSecondary: "hsl(224, 25%, 80%)",
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
      256: "256px",
    },
    maxHeight: {
      image: "200px",
      256: "256px",
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
