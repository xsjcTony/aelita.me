import type { Transition } from 'motion/react'
import type { FC } from 'react'
import { motion } from 'motion/react'
import { cn } from '@utils/className'


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
      className="absolute z-50 h-2 bg-gradient-to-r from-primary from-40% to-secondary to-60% w-[16rem] [--initial-width:8rem] [--expanded-width:16rem] lg:w-[24rem] lg:[--initial-width:12rem] lg:[--expanded-width:24rem]"
      initial={{ width: 'var(--initial-width)' }}
      transition={TRANSITION}
    />

    {/* Aura */}
    <motion.div
      animate={{ width: 'var(--expanded-width)' }}
      className="absolute z-50 blur-3xl h-144 translate-y-1/4 rounded-full opacity-50 bg-gradient-to-r from-primary from-50% to-secondary to-50% w-[12rem] [--initial-width:8rem] [--expanded-width:12rem] lg:w-[18rem] lg:[--initial-width:12rem] lg:[--expanded-width:18rem]"
      initial={{ width: 'var(--initial-width)' }}
      transition={TRANSITION}
    />

    {/* Light */}
    <div className="absolute z-30 w-full h-500 flex items-center justify-center mask-linear-from-50% mask-linear-to-50%">
      <motion.div
        animate={{ width: 'var(--expanded-width)' }}
        className="blur-2xl h-144 translate-y-16 rounded-full bg-gradient-to-r from-primary from-50% to-secondary to-50% w-[6rem] [--initial-width:2rem] [--expanded-width:6rem] lg:w-[9rem] lg:[--initial-width:3rem] lg:[--expanded-width:9rem]"
        initial={{ width: 'var(--initial-width)' }}
        transition={TRANSITION}
      />
    </div>
  </div>
)


export default Lamp
