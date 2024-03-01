import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AB8677",
        black: "#0B0B0B",
        white: "#ffffff"
      },
      fontSize: {
        "16px": "16px",
        "18px": "18px",
        "20px": "20px",
        "h1": "60px",
        "h2": "40px",
        "h3": "32px",
        "h4": "24px"
      },
      fontWeight: {
        "regular" : "400",
        "medium" : "500",
        "semi-bold": "600",
        "bold": "700"
      }
    },
  },
  plugins: [],
};
export default config;
