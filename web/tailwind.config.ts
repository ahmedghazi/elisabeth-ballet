import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "768px",
      md: "1080px",
      // lg: "1441px",
      lg: "1600px",
    },
    spacing: {
      "0": "0",
      "05e": "0.5em",
      1: "1px",
      "1e": "1em",
      "1re": "1rem",

      sm: "var(--space-sm)",
      md: "var(--space-md)",
      lg: "var(--space-lg)",
      xl: "var(--space-xl)",
      200: "var(--space-200)",
      gutter: "var(--gutter)",
      "header-height": "var(--header-height)",
    },
    colors: {
      // bg: "var(--color-bg)",
      primary: "var(--color-primary)",
      white: "white",
      black: "var(--color-black)",
      red: "#ff0000",
      // secondary: "var(--color-secondary)",
      // tertiary: "var(--color-tertiary)",
      // muted: "var(--color-muted)",
      // hover: "var(--color-hover)",
    },
    fontSize: {
      "sm--md": ["var(--text-sm--md)", "1.2"],
      "sm--lg": ["var(--text-sm--lg)", "1.2"],
      "sm--xl": ["var(--text-sm--xl)", "1.2"],
      sm: ["var(--text-sm)", "1.2"],
      md: ["var(--text-md)", "1.2"],
      lg: ["var(--text-lg)", "1"],
      xl: ["var(--text-xl)", "1.13"],
    },
  },
  plugins: [],
};
export default config;
