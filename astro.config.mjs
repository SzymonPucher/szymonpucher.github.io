// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://szymonpucher.github.io',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'pl'],
	},
	integrations: [mdx(), sitemap()],
});
