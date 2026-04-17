import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://cancha360.com",
  build: {
    format: "file", // genera /blog/mi-post.html en lugar de /blog/mi-post/index.html
  },
  integrations: [sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
