// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// رابط الموقع الرسمي
export default defineConfig({
  site: 'https://dalilai.com',
  integrations: [sitemap()],
});
