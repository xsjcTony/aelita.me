import { findAndReplace } from 'mdast-util-find-and-replace'
import type { Root } from 'mdast'


type ParsedMagicLink = {
  text?: string
  link?: string
  type?: string
  imageUrl?: string
}

type ResolvedMagicLink = Required<ParsedMagicLink>


type MagicLinkHandler = {
  name: string
  handler: (content: string) => ParsedMagicLink | false | void
  postprocess?: (resolved: ResolvedMagicLink) => ResolvedMagicLink | void
}


type LinksMapOption = {
  linksMap: Record<string, string | { link: string; imageUrl?: string }>
}

type RemarkMagicLinkOptions = LinksMapOption & {
  handlers?: MagicLinkHandler[]
  imageOverrides?: [RegExp | string, string][]
}


function handlerLink(options: LinksMapOption): MagicLinkHandler {
  const { linksMap } = options

  return {
    name: 'link',
    handler(content: string) {
      const type = 'link'
      const text = content.trim()

      let imageUrl: string | undefined

      const linkDefaults = linksMap[text] ?? void 0
    },
  }
}


const syntaxRexExp = /\{([^{}\n]+?)}/g


export default function remarkMagicLink(options: any) {
  console.log(options)

  return function(tree: Root) {
    findAndReplace(
      tree,
      [
        syntaxRexExp,
        (_, $1: string) => ({
          type: 'html',
          value: `<span>This is a span</span>`,
        }),
      ],
    )
  }
}
