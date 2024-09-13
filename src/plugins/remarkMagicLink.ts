import { findAndReplace } from 'mdast-util-find-and-replace'
import type { Root } from 'mdast'


type ParsedMagicLink = {
  text: string
  link: string
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
