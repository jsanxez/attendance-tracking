import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        symbols: ['var(--symbols)'],
      },
      colors: {
        "primary-container": "#D7E3FF",
        "on-primary-container": "#001B3E",
        "error-container": "#FFDAD6",
        "on-error-container": "#410002",
        "surface": "#F9F9FF",
        "on-surface": "#191C20",
        "on-surface-08": "rgba(73, 69, 79, .08)",
        "on-surface-12": "rgba(73, 69, 79, .12)",
        "surface-variant": "#E0E2EC",
        "on-surface-variant": "#44474E",
        "secondary-container": "#FFE089",
        "surface-container-low": "#F3F3FA",
        "surface-container": "#EDEDF4",
        "surface-container-high": "#E7E8EE",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "dashboard": '360px 1fr'
      }
    },
  },
  plugins: [],
};
export default config;
