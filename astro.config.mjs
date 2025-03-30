// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
	site: 'https://monaaghili.github.io/blog',
	base: isProd ? '/blog/' : '/',
	integrations: [mdx(), sitemap()],
});
