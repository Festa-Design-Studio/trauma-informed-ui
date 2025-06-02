import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        atoms: resolve(__dirname, "src/components/atoms/index.html"),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
