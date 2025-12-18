import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  envDir: ".",
  publicDir: "./public",
  server: {
    host: true,
  },
  build: {
    emptyOutDir: true,
    outDir: "./dist",
    target: "esnext",
    sourcemap: true,
  },
  plugins: [],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/styles/_reset.scss" as *;
        @use "/src/styles/_vars.scss" as *;
        @use "/src/styles/_mixins.scss" as *; `,
      },
    },
  },
});
