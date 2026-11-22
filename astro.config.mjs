// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: process.env.ASTRO_SITE || 'https://szymonpucher.github.io',
	base: process.env.ASTRO_BASE || '/',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'pl'],
	},
	integrations: [mdx(), sitemap()],
});
