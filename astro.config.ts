// noinspection ES6PreferShortImport

import type { RemarkContainerOptions } from './src/libs/remark/container'
import { unified } from '@astrojs/markdown-remark'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, svgoOptimizer } from 'astro/config'
import { astroExpressiveCode as expressiveCode } from 'astro-expressive-code'
import expressiveCodeTwoSlash from 'expressive-code-twoslash'
import remarkDirective from 'remark-directive'
import remarkContainer from './src/libs/remark/container'


export default defineConfig({
  trailingSlash: 'never',
  experimental: {
    contentIntellisense: true,
    clientPrerender: true,
    svgOptimizer: svgoOptimizer(),
  },
  markdown: {
    processor: unified({
      remarkPlugins: [
        remarkDirective,
        [remarkContainer, { prefixClassName: 'blog' } satisfies RemarkContainerOptions],
      ],
    }),
  },
  integrations: [
    react(),
    expressiveCode({
      themes: ['github-dark-default'],
      defaultProps: {
        wrap: false,
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
