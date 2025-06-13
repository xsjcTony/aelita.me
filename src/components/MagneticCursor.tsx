import type { FC } from 'react'
import { AnimatePresence, animate, motion, useMotionValue, useReducedMotion } from 'motion/react'
import { Cursor, useCursorState } from 'motion-plus/react'
import { useEffect } from 'react'
import { cn } from '@utils/className'


type RectangleCornerProps = {
  className?: string
  length?: number
  thickness?: number
  top?: number
  right?: number
  bottom?: number
  left?: number
}

type MagneticCursorProps = {
  activeZone: string
}


const RectangleCorner: FC<RectangleCornerProps> = ({
  className,
  length = 10,
  thickness = 2,
  ...position
}) => (
  <>
    <motion.div
      className={cn('bg-primary absolute', className)}
      style={{ width: thickness, height: length, ...position }}
    />
    <motion.div
      className={cn('bg-primary absolute', className)}
      style={{ width: length, height: thickness, ...position }}
    />
  </>
)


const MagneticCursor: FC<MagneticCursorProps> = ({ activeZone }) => {

  const shouldReduceMotion = useReducedMotion()


  const { targetBoundingBox, zone } = useCursorState()
  const rotate = useMotionValue(0)


  const shouldShowCursor = zone === activeZone && !shouldReduceMotion


  useEffect(() => {
    if (!shouldShowCursor)
      return

    if (!targetBoundingBox) {
      animate(rotate, [rotate.get(), rotate.get() + 360], {
        duration: 3,
        ease: 'linear',
        repeat: Infinity,
      })

      return
    }

    animate(rotate, Math.round(rotate.get() / 180) * 180, {
      type: 'spring',
      bounce: 0.3,
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetBoundingBox, shouldShowCursor])


  return (
    <AnimatePresence>
      {shouldShowCursor
        ? (
          <>
            <Cursor className="bg-primary! size-5!" />
            <Cursor
              className="bg-transparent! rounded-none!"
              magnetic={{ snap: 0.9 }}
              style={{ rotate, width: 40, height: 40 }}
            >
              <>
                <RectangleCorner left={0} top={0} />
                <RectangleCorner right={0} top={0} />
                <RectangleCorner bottom={0} left={0} />
                <RectangleCorner bottom={0} right={0} />
              </>
            </Cursor>
          </>
        )
        : null}
    </AnimatePresence>
  )
}


export default MagneticCursor
