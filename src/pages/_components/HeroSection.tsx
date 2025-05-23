import type { Variants } from 'motion/react'
import type { FC } from 'react'
import { motion } from 'motion/react'
import Lamp from '@components/Lamp'


const MAIN_CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1.2,
    },
  },
}

const CHILD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}


const HeroSection: FC = () => (
  <section className="container py-20" id="hero">
    {/* Lamp effect */}
    <Lamp className="-translate-y-1/3" />

    {/* Info section */}
    <motion.section
      className="flex flex-col items-center"
      id="info"
      initial="hidden"
      variants={MAIN_CONTAINER_VARIANTS}
      viewport={{ once: true }}
      whileInView="visible"
    >
      <motion.h1
        className="text-6xl font-bold text-foreground-lighter"
        variants={CHILD_VARIANTS}
      >
        Aelita
      </motion.h1>
      <motion.p
        className="text-xs mb-20"
        variants={CHILD_VARIANTS}
      >
        alias of Tony Jiang
      </motion.p>
      <motion.h2
        className="text-foreground-light"
        variants={CHILD_VARIANTS}
      >
        Full Stack Software Engineer 🧑‍💻
      </motion.h2>
    </motion.section>
  </section>
)


export default HeroSection
