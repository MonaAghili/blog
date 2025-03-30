import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
	site: 'https://monaaghili.github.io/',
	base: isDev ? '/' : '/blog/',
	integrations: [mdx(), sitemap()],
});
