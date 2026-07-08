import type { Properties, Result } from 'hastscript'
import type { Node, Paragraph, PhrasingContent, Root } from 'mdast'
import type { Directives } from 'mdast-util-directive'
import type { Plugin } from 'unified'
import { fromHtml } from 'hast-util-from-html'
import { h as _h } from 'hastscript'
import { toString } from 'mdast-util-to-string'
import { visit } from 'unist-util-visit'


type ContainerType = 'caution' | 'danger' | 'note' | 'tip'

type IconOptions = {
  className: string
  size: number | string
}

export type RemarkContainerOptions = {
  prefixClassName?: string
  iconOptions?: Partial<IconOptions>
}


function h(
  selector: string,
  props: Properties = {},
  children: any[] = [],
): Paragraph {
  const { tagName, properties } = _h(selector, props)

  return {
    type: 'paragraph',
    data: { hName: tagName, hProperties: properties },
    children,
  }
}


function makeRehypeReadyChildNodes(children: Result['children']): any[] {
  const nodes: Paragraph[] = []

  for (const child of children) {
    if (child.type !== 'element')
      continue

    nodes.push({
      type: 'paragraph',
      data: { hName: child.tagName, hProperties: child.properties },
      children: makeRehypeReadyChildNodes(child.children),
    })
  }

  return nodes
}


const TITLE_MAP: Record<ContainerType, string> = {
  note: 'Note',
  tip: 'Tip',
  caution: 'Caution',
  danger: 'Danger',
}

const VARIANTS = new Set<ContainerType>(['note', 'tip', 'caution', 'danger'])

function isContainerVariant(variant: string): variant is ContainerType {
  return VARIANTS.has(variant)
}


function isDirectiveNode(node: Node): node is Directives {
  return node.type === 'textDirective'
    || node.type === 'leafDirective'
    || (node.type === 'containerDirective')
}


function makeIcons({ className, size }: IconOptions): Record<ContainerType, string> {
  return {
    note: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${className}"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
    tip: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${className}"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
    caution: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${className}"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
    danger: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${className}"><path d="M12 16h.01"/><path d="M12 8v4"/><path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"/></svg>`,
  }
}


const remarkContainer: Plugin<[RemarkContainerOptions?], Root, Root> = ({
  prefixClassName = 'remark',
  iconOptions: _iconOptions = {},
} = {}) => (tree) => {

  const iconOptions: IconOptions = {
    className: `${prefixClassName}-container__icon`,
    size: '1em',
    ..._iconOptions,
  }


  visit(tree, (node, index, parent) => {
    if (!parent || index == null || !isDirectiveNode(node))
      return

    if (node.type === 'textDirective' || node.type === 'leafDirective')
      return


    const variant = node.name

    if (!isContainerVariant(variant))
      return


    let title = TITLE_MAP[variant]
    let titleNode: PhrasingContent[] = [{ type: 'text', value: title }]


    const firstChild = node.children[0]

    /**
       * If there's a label (`[]`) after directive name,
       * then there will be another first `paragraph` child for the label.
       *
       * :::note[custom]
       * The built-in utility types
       * :::
       *
       * ⬇️
       *
       * {
       *   type: 'containerDirective', ✨
       *   name: 'note',
       *   attributes: {},
       *   children: [
       *     {
       *       type: 'paragraph', 1️⃣
       *       data: { directiveLabel: true }, 2️⃣
       *       children: [{ type: 'text', value: 'custom' }], 3️⃣
       *     },
       *     {
       *       type: 'paragraph',
       *       children: [{ type: 'text', value: 'The built-in utility types' }],
       *     }
       *   ],
       * }
       */
    if (
      firstChild?.type === 'paragraph' // 1️⃣
      && firstChild.data // 2️⃣
      && 'directiveLabel' in firstChild.data // 2️⃣
      && firstChild.children.length > 0
    ) {
      title = toString(firstChild.children) // 3️⃣
      titleNode = firstChild.children // 3️⃣
      node.children.splice(0, 1) // 1️⃣2️⃣3️⃣ remove the first paragraph child
    }


    const iconHast = fromHtml(
      makeIcons(iconOptions)[variant],
      { fragment: true, space: 'svg' },
    )
    // ignore the root node and directly go to its children
    const iconNode = makeRehypeReadyChildNodes(iconHast.children)


    parent.children[index] = h(
      'div',
      {
        ariaLabel: title,
        className: `${prefixClassName}-container ${prefixClassName}-container--${variant}`,
      },
      [
        h(
          'p',
          { className: `${prefixClassName}-container__title` },
          [
            ...iconNode,
            ...titleNode,
          ],
        ),
        h(
          'div',
          { className: `${prefixClassName}-container__content` },
          node.children,
        ),
      ],
    )
  })
}


export default remarkContainer
