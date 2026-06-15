import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bd: {
          black:     "#0A0806",
          dark:      "#1A1410",
          charcoal:  "#2C2420",
          muted:     "#7A6B62",
          silver:    "#B0A198",
          cream:     "#F5EDE4",
          ivory:     "#FAF6F1",
          blush:     "#E8B4A0",
          rose:      "#C9846A",
          gold:      "#C9A96E",
          champagne: "#E8D5B0",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body:    ["var(--font-nunito)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
