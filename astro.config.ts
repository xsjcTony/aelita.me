import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'


export default defineConfig({
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
