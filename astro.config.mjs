import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [// Enable Preact to support Preact JSX components.
  preact(), // Enable React for the Algolia search component.
  react(), image(), sitemap(
    {  
      i18n: {
        defaultLocale: 'de', 
        locales: {
          de: 'de-CH',      
          en: 'en-US',
        },
      },
    }
  )],
  site: `http://astro.build` //hier muss die finale adresse rein https://kunde.ch
});