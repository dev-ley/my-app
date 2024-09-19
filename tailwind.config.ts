import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          graphik: ['Graphik', 'sans-serif'],
          graphikBold:['Graphik-bold', 'sans-serif']
        },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        corbtn: "#2091F9",
        branco: "FFFFFF"
      },
    },
  },  
  plugins: [],
};
export default config;
