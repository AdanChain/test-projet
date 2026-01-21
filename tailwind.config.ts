import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-avenir-next)",
          "Avenir Next",
          "system-ui",
          "sans-serif",
        ],
        avenir: [
          "var(--font-avenir-next)",
          "Avenir Next",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        background: "#26262B",
        surface: {
          DEFAULT: "#111217",
          subtle: "#1A1B21",
          soft: "#252633",
        },
        accent: {
          pink: "#FF4C8B",
          purple: "#B26CFF",
          blue: "#4C8BFF",
          yellow: "#FFC857",
          green: "#4CD399",
        },
        text: {
          primary: "#FFFFFF",
          muted: "#B3B5C3",
          subtle: "#80829B",
        },
        border: {
          subtle: "#FFFFFF",
        },
      },
      boxShadow: {
        card: "0 24px 80px rgba(0,0,0,0.55)",
        "card-soft": "0 18px 60px rgba(4,5,15,0.85)",
        pill: "0 12px 40px rgba(0,0,0,0.50)",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.5rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
        },
        screens: {
          lg: "1120px",
          xl: "1200px",
          "2xl": "1280px",
        },
      },
    },
  },
  plugins: [],
};

export default config;

