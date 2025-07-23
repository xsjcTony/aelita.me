// noinspection ES6PreferShortImport

import type { RemarkContainerOptions } from './src/libs/remark/container'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { astroExpressiveCode as expressiveCode } from 'astro-expressive-code'
import expressiveCodeTwoSlash from 'expressive-code-twoslash'
import remarkDirective from 'remark-directive'
import remarkContainer from './src/libs/remark/container'


export default defineConfig({
  trailingSlash: 'never',
  experimental: {
    preserveScriptOrder: true,
    contentIntellisense: true,
    headingIdCompat: true,
    clientPrerender: true,
  },
  markdown: {
    remarkPlugins: [
      remarkDirective,
      [remarkContainer, { prefixClassName: 'blog' } satisfies RemarkContainerOptions],
    ],
  },
  integrations: [
    react(),
    expressiveCode({
      themes: ['github-dark-default'],
      defaultProps: {
        wrap: true,
      },
      styleOverrides: {
        codeFontSize: '0.9rem',
        borderRadius: '0.5rem',
        frames: {
          frameBoxShadowCssValue: 'none',
        },
      },
      plugins: [expressiveCodeTwoSlash()],
    }),
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
