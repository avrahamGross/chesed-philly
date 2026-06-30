import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "system-ui, -apple-system, Segoe UI, sans-serif" },
        body: { value: "system-ui, -apple-system, Segoe UI, sans-serif" },
      },
      colors: {
        brand: {
          50: { value: "#eef7fb" },
          100: { value: "#d9eef7" },
          200: { value: "#b7dff0" },
          300: { value: "#87c7e4" },
          400: { value: "#5aaed5" },
          500: { value: "#3e97c4" },
          600: { value: "#2f7aa0" },
          700: { value: "#255f7f" },
          800: { value: "#1d4b63" },
          900: { value: "#193d54" },
          950: { value: "#102732" },
        },
        gold: {
          50: { value: "#fff5eb" },
          100: { value: "#ffe8d1" },
          200: { value: "#ffcfaa" },
          300: { value: "#f7b17f" },
          400: { value: "#eb8a4e" },
          500: { value: "#d86f30" },
          600: { value: "#b8592a" },
          700: { value: "#944328" },
          800: { value: "#743525" },
          900: { value: "#5b2d20" },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.700}" },
          contrast: { value: "white" },
          muted: { value: "{colors.brand.50}" },
          emphasized: { value: "{colors.brand.800}" },
        },
        accent: {
          solid: { value: "{colors.gold.500}" },
          contrast: { value: "{colors.brand.950}" },
          muted: { value: "{colors.gold.50}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
