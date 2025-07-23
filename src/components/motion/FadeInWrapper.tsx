import type { Variants } from 'motion/react'
import type { FC, HTMLAttributes, ReactNode } from 'react'
import { motion } from 'motion/react'


type FadeInWrapperProps = Pick<HTMLAttributes<HTMLDivElement>, 'className'> & {
  children: ReactNode
  delay?: number
  margin?: string
}


const FADE_IN_ANIMATION: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
}


const FadeInWrapper: FC<FadeInWrapperProps> = ({
  delay = 0,
  margin = '-100px 0px',
  children,
  ...props
}) => (
  <motion.div
    {...props}
    custom={delay}
    initial="hidden"
    variants={FADE_IN_ANIMATION}
    viewport={{ once: true, margin }}
    whileInView="visible"
  >
    {children}
  </motion.div>
)


export default FadeInWrapper
