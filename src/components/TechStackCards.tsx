import type { CSSProperties, FC, ReactNode } from 'react'
import { useMemo, useRef } from 'react'
import {
  BREAKPOINT_2XL,
  BREAKPOINT_LG,
  BREAKPOINT_XL,
} from '@constants/breakpoints'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { useResizeObserver } from '@hooks/useResizeObserver'
import { useMount } from '@hooks/useMount';


export type TechStackItem = {
  name: string
  logo: ReactNode | string
  glowColor: string
  url: string
  style?: CSSProperties
}

type TechStackCardProps = {
  item?: TechStackItem
}

type TechStackCardsProps = {
  items: TechStackItem[]
}


const BORDER_COLOR = 'rgba(38, 38, 38, 0.7)'
const BACKGROUND_COLOR = '#181818'


const BLOCK_WIDTH_MD = 72
const BLOCK_WIDTH_LG = 84
const BLOCK_WIDTH_XL = 96

const BLOCK_GAP_MD = 20
const BLOCK_GAP_LG = 24


const BLOCK_CSS_VARIABLES: CSSProperties = {
  '--border-color': BORDER_COLOR,
  '--bg-color': BACKGROUND_COLOR,
  '--width': `${BLOCK_WIDTH_MD}px`,
  '--width-lg': `${BLOCK_WIDTH_LG}px`,
  '--width-xl': `${BLOCK_WIDTH_XL}px`,
}


const TechStackCard: FC<TechStackCardProps> = ({ item }) => {

  if (!item) {
    return (
      <div
        className="size-(--width) lg:size-(--width-lg) xl:size-(--width-xl) rounded-xl border border-(--border-color) bg-(--bg-color) select-none translate-3d transition-transform duration-3000 ease-[ease] hover:scale-90 hover:duration-200 hover:ease-[ease-in-out]"
        style={BLOCK_CSS_VARIABLES}
      />
    )
  }


  const { name, logo, glowColor, url, style } = item


  return (
    // TODO: adjust font size
    <a
      className="relative size-(--width) lg:size-(--width-lg) xl:size-(--width-xl) rounded-xl border border-(--border-color) bg-(--bg-color) flex justify-center items-center p-16 select-none text-(length:--img-height) lg:text-(length:--img-height-lg) xl:text-(length:--img-height-xl) before:absolute before:inset-1/10 before:bg-(--glow-color) before:blur-lg before:-z-1 before:opacity-0 before:transition-opacity before:duration-3000 before:ease-[ease] before:will-change-[opacity] hover:before:opacity-100 hover:before:duration-200"
      href={url}
      rel="noopener noreferrer"
      style={{
        '--glow-color': glowColor,
        '--img-height': '36px',
        '--img-height-lg': '42px',
        '--img-height-xl': '48px',
        ...BLOCK_CSS_VARIABLES,
      }}
      target="_blank"
      title={name}
    >
      {typeof logo === 'string'
        ? (
          <img
            alt={`${name} logo`}
            className="h-[1em] select-none drop-shadow-[0_0_0.8rem_color-mix(in_srgb,_var(--glow-color)_40%,_transparent)]"
            src={logo}
            style={style}
          />
        )
        : logo}
    </a>
  )
}


const TechStackCards: FC<TechStackCardsProps> = ({ items }) => {

  const bodyRef = useRef<HTMLElement>(null)
  useMount(() => bodyRef.current = document.body)

  const { width: screenWidth } = useResizeObserver(bodyRef)


  const isMD = useMediaQuery(`(width < ${BREAKPOINT_LG}px)`)
  const isLG = useMediaQuery(`(width < ${BREAKPOINT_XL}px)`)
  const isXL = useMediaQuery(`(width > ${BREAKPOINT_2XL}px)`)


  const {
    rows,
    blocksPerRow,
    paddedBlocksPerRowSide,
    techStackPerRow,
    centerIndexes,
  } = useMemo(() => {
    // block with and gap based on screen width
    const _blockWidth = isMD
      ? BLOCK_WIDTH_MD
      : isLG
        ? BLOCK_WIDTH_LG
        : BLOCK_WIDTH_XL

    const _blockGap = isMD
      ? BLOCK_GAP_MD
      : BLOCK_GAP_LG

    const _containerWidth = screenWidth || 1920


    // calculated values
    const blocksPerRow = Math.floor(_containerWidth / (_blockWidth + _blockGap))

    const paddedBlocksPerRowSide = isMD
      ? 1
      : isLG
        ? 2
        : isXL
          ? 3
          : Math.max(Math.floor((_containerWidth - 600) / 250), 0)

    const techStackPerRow = blocksPerRow - (paddedBlocksPerRowSide * 2)

    const rows = Math.ceil(items.length / techStackPerRow)


    // calculate center index of each row (0-based)
    const _firstRowsStartIndex = paddedBlocksPerRowSide
    const _techStacksPerFirstRows = techStackPerRow
    const _lastRowStartIndex = paddedBlocksPerRowSide
      + Math.floor((_techStacksPerFirstRows - (items.length % _techStacksPerFirstRows)) / 2)

    const centerIndexes = new Array(rows)
      .fill(void 0)
      .map((_, index) =>
        index < rows || (items.length % _techStacksPerFirstRows === 0)
          ? {
            start: _firstRowsStartIndex,
            end: blocksPerRow - paddedBlocksPerRowSide,
          }
          : {
            start: _lastRowStartIndex,
            end: _lastRowStartIndex + (items.length % _techStacksPerFirstRows) + 1,
          })


    return { rows, blocksPerRow, paddedBlocksPerRowSide, techStackPerRow, centerIndexes }
  }, [screenWidth, isLG, isMD, isXL, items.length])


  console.log('items.length', items.length)
  console.log('rows', rows)
  console.log('blocksPerRow', blocksPerRow)
  console.log('paddedBlocksPerRowSide', paddedBlocksPerRowSide)
  console.log('techStackPerRow', techStackPerRow)
  console.log('centerIndexes', centerIndexes)


  return (
    <div
      className="container-fluid flex flex-col gap-y-(--gap) lg:gap-y-(--gap-lg)"
      style={{
        '--gap': `${BLOCK_GAP_MD}px`,
        '--gap-lg': `${BLOCK_GAP_LG}px`,
        '--width': `${BLOCK_WIDTH_MD}px`,
        '--width-lg': `${BLOCK_WIDTH_LG}px`,
        '--width-xl': `${BLOCK_WIDTH_XL}px`,
      }}
    >
      {new Array(rows).fill(void 0).map((_, rowIndex) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={rowIndex}
          className="grid auto-cols-(--width) lg:auto-cols-(--width-lg) xl:auto-cols-(--width-xl) grid-flow-col gap-x-(--gap) lg:gap-x-(--gap-lg) overflow-x-clip"
        >
          {new Array(blocksPerRow + 2).fill(void 0).map((__, columnIndex) => {
            const techStack = items[
              ((rowIndex - 1) * techStackPerRow)
              + (columnIndex - 1) - (centerIndexes[rowIndex]?.start ?? 0)
            ]

            return <TechStackCard key={techStack?.name} item={techStack} />
          })}
        </div>
      ))}
    </div>
  )
}


export default TechStackCards
