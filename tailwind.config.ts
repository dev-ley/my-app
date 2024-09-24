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
        graphikBold: ['Graphik-bold', 'sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        corbtn: "#2091F9",
        branco: "#FFFFFF"
      },
      backgroundImage: {
        'mobile-bg': "url('/images/navbar/rectangle9.png')",  // Background mobile
        'desktop-bg': "url('/images/navbar/bgdesk.svg')",    // Background desktop
      },
    },
    screens: {
      'sm': '640px',  // Para telas pequenas (ex: celulares)
      'md': '768px',  // Para telas médias (ex: tablets)
      'lg': '1024px', // Para telas grandes (ex: desktops)
      'xl': '1280px', // Para telas muito grandes (ex: desktops grandes)
      '2xl': '1536px' // Para telas ultra largas (ex: monitores grandes)
    }
  },
  plugins: [],
};

export default config;
