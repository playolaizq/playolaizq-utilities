import { defineConfig } from "vite";

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "styles"
    },
    emptyOutDir: false
  }
});
