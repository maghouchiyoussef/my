// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// غيّر هذا الرابط إلى دومينك بعد شرائه (مثلاً https://dalilai.com)
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap()],
});
