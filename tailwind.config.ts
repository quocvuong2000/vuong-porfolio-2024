import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#efeee5",
        secondary: "#274546",
        action: "#f99a49",
        extra: "#6CE5B1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)", borderRadius: "0" },
          "25%,75%": { borderRadius: "32% 31% 31% 27% / 30% 30% 27% 27%" },
          "50%": {
            transform: "rotate(5deg)",
            borderRadius: "0",
          },
        },
        color_anim: {
          "0%,100%": {
            fill: "white",
            opacity: "0.2",
          },
          "50%": {
            fill: "inherit",
            opacity: "1",
          },
        },
        bouncy: {
          "0%,100%": {
            transform: "translateY(0px) scale(1)",
          },
          "50%": {
            transform: "translateY(-5px) scale(1.1)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 10s ease-in-out infinite",
        bouncyAnimate: "bouncy 3s ease-in-out infinite",
        color_anim_0: "color_anim 2s infinite 0.8s",
        color_anim_1: "color_anim 2s infinite 0.6s",
        color_anim_2: "color_anim 2s infinite 0.4s",
        color_anim_3: "color_anim 2s infinite 0.2s",
      },
    },
  },
  plugins: [],
};
export default config;
