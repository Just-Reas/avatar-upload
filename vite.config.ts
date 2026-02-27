import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@styles/variables.scss" as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "src/style"),
    },
  },
});
