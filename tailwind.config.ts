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
        "on-surface-variant": "#44474E",
        "secondary-container": "#FFE089",
        "surface-container-low": "#F3F3FA",
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
