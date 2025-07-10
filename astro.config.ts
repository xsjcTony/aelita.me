import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'


export default defineConfig({
  trailingSlash: 'never',
  experimental: {
    preserveScriptOrder: true,
    contentIntellisense: true,
    headingIdCompat: true,
    clientPrerender: true,
  },
  integrations: [
    react(),
  ],
  server: {
    host: true,
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
