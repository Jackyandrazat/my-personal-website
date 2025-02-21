import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import netlifyPlugin from "@netlify/vite-plugin-react-router";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), netlifyPlugin()],
  resolve: {
    alias: {
      "pdfjs-dist": path.resolve(__dirname, "node_modules/pdfjs-dist"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          pdfjsWorker: ["pdfjs-dist/build/pdf.worker"],
          "pdf.worker": ["pdfjs-dist/build/pdf.worker"],
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true, // Agar PDF.js dapat dijalankan
    },
    copyPublicDir: true, // Pastikan folder `public/` disalin ke hasil build
  },
});
