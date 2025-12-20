import { defineConfig } from "vite";
import { sync } from "glob";

// Вычисляем все html файлы для билда
const htmlFiles = [...sync("*.html"), ...sync("src/**/*.html")].map((p) =>
  p.replace(/\\/g, "/"),
);

// https://vite.dev/config/
export default defineConfig({
  envDir: ".",
  publicDir: "./public",
  server: {
    host: true,
    // open: "./src/index.html",
  },
  build: {
    emptyOutDir: true,
    outDir: "./dist",
    target: "esnext",
    sourcemap: true,

    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      input: htmlFiles.length > 0 ? htmlFiles : "index.html",
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.names[0].split(".").at(1);
          if (extType && /png|jpe?g|svg|gif|tiff|bmp/i.test(extType)) {
            extType = "images";
          } else if (extType && /ttf|woff/i.test(extType)) {
            extType = "fonts";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
  plugins: [],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "/src/styles/_reset.scss" as *;
  //       @use "/src/styles/_vars.scss" as *;
  //       @use "/src/styles/_mixins.scss" as *;`,
  //     },
  //   },
  // },
});
