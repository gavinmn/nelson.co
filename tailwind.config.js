module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "hsl(224, 10%, 10%)",
        secondary: "hsl(224, 10%, 46%)",
      },
      textColor: {
        primary: "hsl(224, 10%, 10%)",
        secondary: "hsl(224, 10%, 46%)",
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
  plugins: [],
}
