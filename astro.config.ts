import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import unoCSS from 'unocss/astro'


export default defineConfig({
  integrations: [
    unoCSS({ injectReset: '@unocss/reset/tailwind-compat.css' }),
    react(),
  ],
})
