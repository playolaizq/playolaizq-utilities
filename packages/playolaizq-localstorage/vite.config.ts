/// <reference types="vitest" />
import { defineConfig } from "vite";

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "localstorage"
    },
    emptyOutDir: false
  },
  test: {
    environment: "jsdom"
  }
});
