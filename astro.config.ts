import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import unoCSS from 'unocss/astro'
import remarkIconLink from './src/plugins/remarkIconLink'


export default defineConfig({
  integrations: [
    unoCSS({ injectReset: '@unocss/reset/tailwind-compat.css' }),
    react(),
  ],
  markdown: {
    remarkPlugins: [
      [remarkIconLink, { icons: { '🔗': '🔗' } }],
    ],
  },
})
