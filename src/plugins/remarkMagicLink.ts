import { toHtml } from 'hast-util-to-html'
import { h } from 'hastscript'
import { findAndReplace } from 'mdast-util-find-and-replace'
import type { Root } from 'mdast'


type ParsedMagicLink = {
  text: string
  link: string
  type: string
  imageUrl: string | false
}


type MagicLinkHandler = {
  name: string
  handler: (content: string) => ParsedMagicLink | false | undefined
}

type MagicLinkPostprocessor = {
  name: string
  postprocess: (parsed: ParsedMagicLink) => void
}


type LinksMapOption = {
  linksMap: Record<string, string | { link: string; imageUrl?: string | false }>
}

export type RemarkMagicLinkOptions = LinksMapOption & {
  handlers?: MagicLinkHandler[]
  postprocessors?: MagicLinkPostprocessor[]
  openInNewTab?: boolean
}


const SYNTAX_REGEXP = /\{([^{}\n]+?)}/g
const HTTP_PROTOCOL_REGEXP = /^https?:\/\//i
const GITHUB_ORG_REGEXP = /^(?:https?:\/\/)?github\.com\/([\w-]+?)(?:$|\/)/i

const GET_FAVICON_URL_BASE = 'https://favicon.yandex.net/favicon/'

const GITHUB_SPECIAL_ROUTES = new Set([
  'settings',
  'pulls',
  'issues',
  'discussions',
  'sponsor',
  'sponsors',
  'notifications',
])


function makeLinkHandler(options: LinksMapOption | undefined): MagicLinkHandler {
  const { linksMap } = options ?? {}

  return {
    name: 'link',
    handler(content: string) {
      const type = 'link'
      const text = content.trim()

      let url: string | undefined
      let imageUrl: string | false | undefined

      const link = linksMap?.[text] ?? void 0

      if (!link)
        return false

      if (typeof link === 'string') {
        url = link
      } else {
        url = link.link
        imageUrl = link.imageUrl
      }

      if (!HTTP_PROTOCOL_REGEXP.exec(url))
        return false

      imageUrl ??= `${GET_FAVICON_URL_BASE}${new URL(url).hostname}`


      return {
        text,
        link: url,
        type,
        imageUrl,
      }
    },
  }
}


const gitHubOrgImagePostprocessor: MagicLinkPostprocessor = {
  name: 'github-org-image',
  postprocess(parsed: ParsedMagicLink) {
    if (parsed.imageUrl === false)
      return

    const org = GITHUB_ORG_REGEXP.exec(parsed.link)?.[1]

    if (
      !org
      || GITHUB_SPECIAL_ROUTES.has(org)
      || !parsed.imageUrl.startsWith(GET_FAVICON_URL_BASE)
    )
      return

    parsed.imageUrl = `https://github.com/${org}.png`
  },
}


function parseMagicLink(content: string, handlers: MagicLinkHandler[]): ParsedMagicLink | false {
  for (const handler of handlers) {
    const parsed = handler.handler(content)

    if (parsed)
      return parsed
  }

  return false
}


export default function remarkMagicLink(options: RemarkMagicLinkOptions) {
  const {
    handlers = [makeLinkHandler(options)],
    postprocessors = [gitHubOrgImagePostprocessor],
    openInNewTab = true,
  } = options

  return function(tree: Root) {
    findAndReplace(
      tree,
      [
        SYNTAX_REGEXP,
        (_, content: string) => {
          const parsed = parseMagicLink(content, handlers)

          if (!parsed)
            return false

          const postProcessed = parsed

          for (const postprocessor of postprocessors)
            postprocessor.postprocess(postProcessed)


          const {
            text,
            link,
            type,
            imageUrl,
          } = postProcessed


          const hast = h(
            `a.remark-magic-link.remark-magic-link-${type}`,
            {
              href: link,
              ...imageUrl && { 'class': 'remark-magic-link-with-image' },
              ...openInNewTab && { target: '_blank' },
            },
            [
              ...imageUrl
                ? [h('span.remark-magic-link-image', {
                  style: `background-image: url('${imageUrl}')`,
                  role: 'img',
                })]
                : [],
              h('span.remark-magic-link-text', text),
            ],
          )

          return {
            type: 'html',
            value: toHtml(hast),
          }
        },
      ],
    )
  }
}
