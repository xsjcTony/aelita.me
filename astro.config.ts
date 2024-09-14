import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import unoCSS from 'unocss/astro'
import remarkMagicLink from './src/plugins/remarkMagicLink'


export default defineConfig({
  integrations: [
    unoCSS({ injectReset: '@unocss/reset/tailwind-compat.css' }),
    react(),
  ],
  markdown: {
    remarkPlugins: [
      [
        remarkMagicLink,
        {
          linksMap: {
            Vitest: { link: 'https://github.com/vitest-dev/vitest' },
            Vue: { link: 'https://github.com/vuejs/core', imageUrl: 'https://vuejs.org/logo.svg' },
          },
        },
      ],
    ],
  },
})
