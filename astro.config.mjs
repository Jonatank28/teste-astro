import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: node({
    mode: "standalone"
  })
  i18n: {
    defaultLocale: "pt-br",
    locales: ["en", "fr", "pt-br", "es"],
  },
});