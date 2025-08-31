import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    cssCodeSplit: false, // bundle all CSS into one file
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
