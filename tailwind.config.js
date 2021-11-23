module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        background: "hsl(0, 0%, 97%)",
        darkBackground: "hsl(224, 25%, 12%)",
        code: "hsl(0, 0%, 93%)",
        darkCode: "hsl(224, 25%, 8%)",
        selection: "#FFAB7F",
      },
      textColor: {
        primary: "hsl(0, 0%, 5%)",
        secondary: "hsl(0, 0%, 23%)",
        tertiary: "hsl(224, 6%, 44%)",
        darkTertiary: "hsl(224, 25%, 56%)",
        darkPrimary: "hsl(0, 0%, 100%)",
        darkSecondary: "hsl(224, 25%, 80%)",
        svg: "hsl(0, 0%, 97%)",
        darkSVG: "hsl(224, 25%, 12%)",
      },
      gridTemplateColumns: {
        "20-80": "60% 40%",
        "118-auto": "118px auto",
        auto: "auto",
      },
      gridColumn: {
        1: "1",
      },
      gridRow: {
        1: "1",
      },
      gridTemplateRows: {
        auto: "auto",
      },
      height: {
        400: "400px",
      },
      animation: {
        gradient: "gradient 8s linear infinite ",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "100% 0%",
          },
          "25%": {
            "background-position": "100% 100%",
          },
          "50%": {
            "background-position": "0% 100%",
          },
          "75%": {
            "background-position": "0% 0%",
          },
        },
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
  plugins: [],
}
