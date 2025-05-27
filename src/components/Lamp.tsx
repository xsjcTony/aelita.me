import type { Transition } from 'motion/react'
import type { FC } from 'react'
import { motion } from 'motion/react'
import { cn } from '@utils/className.ts'


type LampProps = {
  className?: string
}


const TRANSITION: Transition = {
  delay: 0.2,
  duration: 0.7,
  ease: 'easeInOut',
}


const Lamp: FC<LampProps> = ({ className }) => (
  <div
    className={cn(
      'relative w-full h-160 flex items-center justify-center isolate z-0 pointer-events-none',
      className,
    )}
  >
    {/* Line */}
    <motion.div
      animate={{ width: 'var(--expanded-width)' }}
      className="absolute z-50 h-2 bg-gradient-to-r from-primary from-40% to-secondary to-60% w-[16rem] [--initial-width:8rem] [--expanded-width:16rem]"
      initial={{ width: 'var(--initial-width)' }}
      transition={TRANSITION}
    />

    {/* Aura */}
    <motion.div
      animate={{ width: 'var(--expanded-width)' }}
      className="absolute z-50 blur-3xl h-144 translate-y-1/4 rounded-full opacity-50 bg-gradient-to-r from-primary from-50% to-secondary to-50% w-[12rem] [--initial-width:8rem] [--expanded-width:12rem]"
      initial={{ width: 'var(--initial-width)' }}
      transition={TRANSITION}
    />

    {/* Light */}
    <div className="absolute z-30 w-full h-500 flex items-center justify-center mask-linear-from-50% mask-linear-to-50%">
      <motion.div
        animate={{ width: 'var(--expanded-width)' }}
        className="blur-2xl h-144 translate-y-16 rounded-full bg-gradient-to-r from-primary from-50% to-secondary to-50% w-[7rem] [--initial-width:2rem] [--expanded-width:7rem]"
        initial={{ width: 'var(--initial-width)' }}
        transition={TRANSITION}
      />
    </div>
  </div>
)


export default Lamp
