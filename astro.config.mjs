import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: isProd ? 'https://monaaghili.github.io/blog/' : 'http://localhost:4321',
  base: isProd ? '/blog/' : '/',
  integrations: [mdx(), sitemap()],
});
