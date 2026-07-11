import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tanstrack.com',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'always' },
});
