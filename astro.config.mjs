// @ts-check
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://verticaldigitalholdings.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/cart'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
