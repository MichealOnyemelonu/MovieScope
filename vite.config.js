import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  base: "/",
  envDir: "../",
  
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});