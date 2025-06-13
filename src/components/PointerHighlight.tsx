import type { FC, PropsWithChildren, SVGProps } from 'react'
import { motion } from 'motion/react'
import { useRef, useState } from 'react'
import { useMount } from '@hooks/useMount'
import { cn } from '@utils/className'


type PointerHighlightProps = {
  delay?: number
  paddingBlock?: number
  paddingInline?: number
  classNames?: {
    container?: string
    rectangle?: string
    pointer?: string
  }
}


const DEFAULT_CLASS_NAMES: PointerHighlightProps['classNames'] = {}


const Pointer: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    fill="currentColor"
    height="1em"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1"
    viewBox="0 0 16 16"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
  </svg>
)


const PointerHighlight: FC<PropsWithChildren<PointerHighlightProps>> = ({
  children,
  delay = 0,
  paddingBlock = 0,
  paddingInline = 0,
  classNames = DEFAULT_CLASS_NAMES,
}) => {

  const containerElRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })


  useMount(() => {
    const containerEl = containerElRef.current

    if (!containerEl)
      return

    const { width, height } = containerEl.getBoundingClientRect()
    setDimensions({ width: width + (paddingInline * 2), height: height + (paddingBlock * 2) })

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { inlineSize: width = 0, blockSize: height = 0 } = entry.contentBoxSize.at(0) ?? {}
        setDimensions({ width: width + (paddingInline * 2), height: height + (paddingBlock * 2) })
      }
    })

    resizeObserver.observe(containerEl)


    return () => void resizeObserver.unobserve(containerEl)
  })


  return (
    <div ref={containerElRef} className={cn('relative w-fit', classNames.container)}>
      {children}

      {dimensions.width > 0 && dimensions.height > 0 && (
        <motion.div
          animate={{ opacity: 1 }}
          className="pointer-events-none absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay }}
        >
          <motion.div
            className={cn(
              'absolute inset-0 border border-primary bg-primary/20 rounded-md box-content',
              classNames.rectangle,
            )}
            initial={{ width: 0, height: 0, opacity: 0 }}
            // minus 1 more for visual correctness due to border
            style={{ top: -paddingBlock - 1, left: -paddingInline - 1 }}
            transition={{ duration: 1, ease: 'easeInOut', delay }}
            viewport={{ once: true, margin: '-100px 0px' }}
            whileInView={{
              width: dimensions.width,
              height: dimensions.height,
              opacity: 1,
            }}
          />
          <motion.div
            className="pointer-events-none absolute"
            initial={{ opacity: 0 }}
            style={{ rotate: -90 }}
            transition={{
              opacity: { duration: 0.5, ease: 'easeInOut' },
              duration: 1,
              ease: 'easeInOut',
              delay,
            }}
            viewport={{ once: true, margin: '-100px 0px' }}
            whileInView={{
              opacity: 1,
              x: dimensions.width - 6,
              y: dimensions.height,
            }}
          >
            <Pointer className={cn('size-20 text-primary', classNames.pointer)} />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}


export default PointerHighlight
