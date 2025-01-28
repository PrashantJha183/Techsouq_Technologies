import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "build", // Output directory
    rollupOptions: {
      output: {
        manualChunks: undefined, // Ensures consistent bundling
      },
    },
  },
  server: {
    open: true, // Automatically opens the app in the default browser during development
  },
});
