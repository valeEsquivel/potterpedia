import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        spells: resolve(__dirname, "src/pages/spells.html"),
        houseCharacters: resolve(__dirname, "src/pages/houseCharacters.html"),
        information: resolve(__dirname, "src/pages/information.html"),
      },
    },
  },
});
