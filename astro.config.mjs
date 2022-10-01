import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [// Enable Preact to support Preact JSX components.
  preact(), // Enable React for the Algolia search component.
  react(), image()],
  site: `http://astro.build`
});