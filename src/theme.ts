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
          50: { value: "#eef4fb" },
          100: { value: "#d5e4f5" },
          200: { value: "#adc8ea" },
          300: { value: "#7aa6db" },
          400: { value: "#4a84c9" },
          500: { value: "#2d66ad" },
          600: { value: "#1f4f8f" },
          700: { value: "#1a3f73" },
          800: { value: "#17355f" },
          900: { value: "#152d4f" },
          950: { value: "#0e1d33" },
        },
        gold: {
          50: { value: "#fdf8ef" },
          100: { value: "#f9edd6" },
          200: { value: "#f2d8a8" },
          300: { value: "#e9bc72" },
          400: { value: "#df9a3d" },
          500: { value: "#d48225" },
          600: { value: "#c0661d" },
          700: { value: "#a04d1b" },
          800: { value: "#833e1c" },
          900: { value: "#6c341a" },
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
