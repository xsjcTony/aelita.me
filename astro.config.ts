// noinspection ES6PreferShortImport

import type { RemarkContainerOptions } from './src/libs/remark/container'
import type { Element } from 'hast'
import type { Options as RehypeExternalLinksOptions } from 'rehype-external-links'
import { readFileSync } from 'node:fs'
import { unified } from '@astrojs/markdown-remark'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, svgoOptimizer } from 'astro/config'
import { astroExpressiveCode as expressiveCode } from 'astro-expressive-code'
import expressiveCodeTwoSlash from 'expressive-code-twoslash'
import { fromHtml } from 'hast-util-from-html'
import rehypeExternalLinks from 'rehype-external-links'
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
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            properties: { className: 'external-link' },
            content: svgToHastElement(readFileSync(
              './src/assets/icons/external-link.svg',
              'utf8',
            )),
            contentProperties: {
              className: 'external-link-indicator',
              ariaHidden: true,
            },
            target: '_blank',
            rel: ['noreferrer', 'nofollow', 'noopener'],
          } satisfies RehypeExternalLinksOptions,
        ],
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


function svgToHastElement(svg: string): Element {
  const tree = fromHtml(svg, { fragment: true })

  const svgNode = tree.children.find(
    (node): node is Element =>
      node.type === 'element' && node.tagName === 'svg',
  )

  if (!svgNode)
    throw new Error(`[utility:svgToHastElement]: No <svg> element found in the provided SVG string.`)

  svgNode.properties = {
    ...svgNode.properties,
    ariaHidden: true,
    focusable: true,
    className: 'external-link-icon',
  }

  return svgNode
}
