import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        h1: ["3.052rem", { lineHeight: "1.33", fontWeight: "700" }], // 48.83px
        h2: ["2.441rem", { lineHeight: "1.33", fontWeight: "600" }], // 39.06px
        h3: ["1.953rem", { lineHeight: "1.33", fontWeight: "600" }], // 31.25px
        h4: ["1.563rem", { lineHeight: "1.33", fontWeight: "600" }], // 25px
        h5: ["1.25rem", { lineHeight: "1.33", fontWeight: "600" }], // 20px
        h6: ["1rem", { lineHeight: "1.33", fontWeight: "600" }], // 16px
        p: ["1rem", { lineHeight: "1.75", fontWeight: "300" }], // 16px
        small: [".8rem", { lineHeight: "1.75" }], // 12.8px
        quote: ["1.25rem", { lineHeight: "1.75" }], // 20px
      },
    },
  },
  plugins: [],
};
