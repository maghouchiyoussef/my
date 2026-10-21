// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// رابط الموقع الرسمي (مثلاً https://dalilai.com)
export default defineConfig({
  site: 'https://dalilai.com',
  integrations: [sitemap()],
});
