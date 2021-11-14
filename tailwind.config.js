module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "hsl(224, 10%, 10%)",
        secondary: "hsl(224, 10%, 46%)",
        "primary-dark": "hsl(0, 0%, 100%)",
        background: "hsl(0, 0%, 100%)",
        "background-dark": "hsl(224, 25%, 12%)",
      },
      textColor: {
        primary: "hsl(224, 10%, 10%)",
        secondary: "hsl(224, 10%, 46%)",
        "primary-dark": "hsl(0, 0%, 100%)",
        "secondary-dark": "hsl(224, 25%, 46%)",
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
