module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        background: "hsl(20, 8%, 97%)",
        darkBackground: "hsl(224, 25%, 12%)",
        code: "hsl(20, 8%, 92%)",
        darkCode: "hsl(224, 25%, 8%)",
        selection: "#FFAB7F",
      },
      textColor: {
        primary: "hsl(20, 50%, 12%)",
        secondary: "hsl(20, 21%, 30%)",
        tertiary: "hsl(20, 15%, 46%)",
        darkTertiary: "hsl(224, 25%, 56%)",
        darkPrimary: "hsl(0, 0%, 100%)",
        darkSecondary: "hsl(224, 25%, 80%)",
        svg: "hsl(20, 8%, 97%)",
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
        gradient: "gradient 16s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "top center",
          },
          "25%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "bottom center",
          },
          "75%": {
            "background-size": "200% 200%",
            "background-position": "left center",
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
  plugins: [
    // function ({ addUtilities }) {
    //   const extendUnderline = {
    //     ".underline": {
    //       textDecoration: "underline",
    //       "text-decoration-color": "hsl(224, 25%, 46%)",
    //     },
    //   }
    //   addUtilities(extendUnderline)
    // },
  ],
}
