import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(), 
		sveltekit()
	],
	preview: {
		host: '0.0.0.0',
		port: 4173,
		allowedHosts: [
			'useragent.one',
			'www.useragent.one',
			'localhost',
			'127.0.0.1',
		],
	}
});
