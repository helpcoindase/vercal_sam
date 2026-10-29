// ./tailwind.config.js
import lineClamp from "@tailwindcss/line-clamp";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xsm: "30rem",
      sm: "640px",
      md: "800px",
      mlg: "62rem", // ✅ Custom breakpoint
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px", // ✅ Custom breakpoint
      "3xl": "1600px", // ✅ Custom breakpoint
      xxl: "1500px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-mulish)"],
        mulish: ["var(--font-mulish)"], // Set as your default font
      },
      colors: {
        "custom-primary": "var(--primary-color)",
        "custom-secondary": "var(--secondary-color)",
      },
    },
  },
  plugins: [lineClamp],
};

export default config;
