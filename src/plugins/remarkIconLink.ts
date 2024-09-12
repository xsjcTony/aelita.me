import { findAndReplace } from 'mdast-util-find-and-replace'
import type { Root } from 'mdast'


const syntaxRexExp = /^\{([^{}\n]+?)}/i


export default function remarkIconLink(options: any) {
  console.log(options)

  return function(tree: Root) {
    findAndReplace(
      tree,
      [
        syntaxRexExp,
        (...args: any[]) => {
          console.log(args)
          return '123'
        },
      ],
    )
  }
}
