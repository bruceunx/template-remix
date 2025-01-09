import type { Config } from "tailwindcss";
import dayui from "daisyui";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", "[data-theme='dark']"],
  theme: {
    extend: {
      fontFamily: {
        // dmsans: "Dmsans", //font-dmsans
        // handlee: "Handlee",
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [dayui],
  daisyui: {
    themes: false,
  },
} satisfies Config;
