// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/OpitmaTechHub-Website/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-ui": [
            "framer-motion",
            "lucide-react",
            "react-i18next",
            "i18next",
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
