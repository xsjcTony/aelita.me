import type { CSSProperties, FC, ReactNode } from 'react'
import { useMemo } from 'react'
import Tooltip from '@components/Tooltip'
import {
  BREAKPOINT_2XL,
  BREAKPOINT_LG,
  BREAKPOINT_XL,
} from '@constants/breakpoints'
import { useBodyRef } from '@hooks/useBodyRef'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { useResizeObserver } from '@hooks/useResizeObserver'


export type TechStackItem = {
  name: string
  logo: ReactNode
  glowColor: string
  url: string
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
        aria-label="empty block"
        className="size-(--width) lg:size-(--width-lg) xl:size-(--width-xl) rounded-xl border border-(--border-color) bg-(--bg-color) select-none translate-3d transition-transform duration-3000 ease-[ease] hover:scale-90 hover:duration-200 hover:ease-[ease-in-out]"
        style={BLOCK_CSS_VARIABLES}
      />
    )
  }


  const { name, logo, glowColor, url } = item


  return (
    <Tooltip
      content={name}
      contentWrapperDataAttributes={{ 'data-cursor-zone': 'techStack' }}
      shadowColor={glowColor}
    >
      <a
        aria-label={name}
        className="relative size-(--width) lg:size-(--width-lg) xl:size-(--width-xl) rounded-xl border border-(--border-color) bg-(--bg-color) flex justify-center items-center select-none text-(length:--img-height) lg:text-(length:--img-height-lg) xl:text-(length:--img-height-xl) before:absolute before:inset-1/10 before:bg-(--glow-color) before:blur-lg before:-z-1 before:opacity-0 before:transition-opacity before:duration-3000 before:ease-[ease] before:will-change-[opacity] hover:before:opacity-100 hover:before:duration-200"
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
      >
        {logo}
      </a>
    </Tooltip>
  )
}


const TechStackCards: FC<TechStackCardsProps> = ({ items }) => {

  const bodyRef = useBodyRef()

  const { width: screenWidth } = useResizeObserver(bodyRef)


  const isMD = useMediaQuery(`(width < ${BREAKPOINT_LG}px)`)
  const isLG = useMediaQuery(`(width < ${BREAKPOINT_XL}px)`)
  const isXL = useMediaQuery(`(width > ${BREAKPOINT_2XL}px)`)


  const {
    rows,
    blocksPerRow,
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
    const _paddedBlocksPerRowSide = isMD
      ? 1
      : isLG
        ? 2
        : isXL
          ? 3
          : Math.max(Math.floor((_containerWidth - 600) / 250), 0)

    const blocksPerRow = Math.floor(_containerWidth / (_blockWidth + _blockGap))

    const techStackPerRow = blocksPerRow - (_paddedBlocksPerRowSide * 2)

    const rows = Math.ceil(items.length / techStackPerRow)


    // calculate center indexes of each row (0-based)
    const _lastRowStartIndex = _paddedBlocksPerRowSide
      + Math.floor((techStackPerRow - (items.length % techStackPerRow)) / 2)

    const centerIndexes = new Array(rows)
      .fill(void 0)
      .map((_, index) =>
        (index + 1) < rows || (items.length % techStackPerRow === 0)
          ? {
            start: _paddedBlocksPerRowSide,
            end: blocksPerRow - _paddedBlocksPerRowSide - 1,
          }
          : {
            start: _lastRowStartIndex,
            end: _lastRowStartIndex + (items.length % techStackPerRow) - 1,
          })


    return { rows, blocksPerRow, techStackPerRow, centerIndexes }
  }, [screenWidth, isLG, isMD, isXL, items.length])


  const mapCards = (rowIndex: number) =>
    // eslint-disable-next-line react/display-name, react/no-unstable-nested-components
    (_: any, columnIndex: number) => {
      const emptyTechStackCard = <TechStackCard key={columnIndex} />

      const centerIndex = centerIndexes[rowIndex]

      if (!centerIndex)
        return emptyTechStackCard

      if (columnIndex < centerIndex.start || columnIndex > centerIndex.end)
        return emptyTechStackCard

      const techStack = items[
        (rowIndex * techStackPerRow) + columnIndex - centerIndex.start
      ]

      return techStack
        ? <TechStackCard key={techStack.name} item={techStack} />
        : emptyTechStackCard
    }


  return (
    <div
      className="container-fluid py-32 flex flex-col gap-y-(--gap) lg:gap-y-(--gap-lg) overflow-x-clip mask-x-from-80% mask-x-to-100%"
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
          className="grid auto-cols-(--width) lg:auto-cols-(--width-lg) xl:auto-cols-(--width-xl) grid-flow-col gap-x-(--gap) lg:gap-x-(--gap-lg) odd:translate-x-[-12px] even:translate-x-[24px]"
        >
          {new Array(blocksPerRow + 2).fill(void 0).map(mapCards(rowIndex))}
        </div>
      ))}
    </div>
  )
}


export default TechStackCards
