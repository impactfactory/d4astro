import { defineConfig } from 'astro/config'; 
import svelte from '@astrojs/svelte';
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(), image(), sitemap({
    i18n: {
      defaultLocale: 'de',
      locales: {
        de: 'de-CH',
        en: 'en-US'
      }
    }
  }), partytown({
    // Example: Disable debug mode.
    config: { debug: false },
  
})],
  site: `http://astro.build` //hier muss die finale adresse rein https://kunde.ch
});