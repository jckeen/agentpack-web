// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Custom apex domain → no sub-path base.
// https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
  site: 'https://agentpack.to',
  base: '/',
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
