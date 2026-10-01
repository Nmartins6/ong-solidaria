import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  root: ".",
  base: "./",

  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: "esbuild",

    rollupOptions: {
      input: {
        index: resolve(process.cwd(), "index.html"),
        app: resolve(process.cwd(), "html/index.html")
      }
    }
  }
});