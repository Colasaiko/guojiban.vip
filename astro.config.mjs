import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://guojiban.vip',
  trailingSlash: 'always',
  redirects: {
    '/vpn': '/tizi/',
  },
  vite: { plugins: [tailwindcss()] },
});
