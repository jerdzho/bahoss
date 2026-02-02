import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/bahoss/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        homeopatija: resolve(__dirname, "homeopatija.html"),
        bachove: resolve(__dirname, "bachove.html"),
        schussler: resolve(__dirname, "schussler.html"),
        esenca: resolve(__dirname, "esenca.html"),

      },
    },
  },
});
