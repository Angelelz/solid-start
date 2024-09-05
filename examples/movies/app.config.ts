import icons from "unplugin-icons/vite";
import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  experimental: {
    islands: true
  },
  vite: {
    plugins: [icons({ compiler: "solid" })]
  }
});
