import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  base: command === "build" ? "/abaz-fullstack-developer/" : "/",
  publicDir: command === "build" ? "public" : "src/assets",
  build: {
    brotliSize: false,
    manifest: false,
    minify: mode === "development" ? false : "terser",
    outDir: "dist",
    sourcemap: command === "serve" ? "inline" : false,

    rollupOptions: {
      output: {
        assetFileNames: "clientlib-site/resources/[ext]/[name][extname]",
        chunkFileNames: "clientlib-site/resources/chunks/[name].[hash].js",
        entryFileNames: "clientlib-site/resources/js/[name].js",
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));
