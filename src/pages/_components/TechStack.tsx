import type { FC } from 'react'
import { motion } from 'motion/react'
import PointerHighlight from '@components/PointerHighlight'
import WithSparkles from '@components/WithSparkles'
import { useFadeInWhenParentIsInView } from '@hooks/useFadeInWhenParentIsInView'


const TechStack: FC = () => {

  const {
    containerElRef,
    animateElScope,
  } = useFadeInWhenParentIsInView<HTMLElement, HTMLHeadingElement>({ margin: '-180px 0px' })


  return (
    <motion.section ref={containerElRef} className="container py-80" id="tech-stack">
      <motion.div ref={animateElScope} className="mb-40" initial={{ opacity: 0, y: 20 }}>
        <WithSparkles>
          <h2 className="text-3xl text-center font-bold text-foreground-lighter">Tech Stack</h2>
        </WithSparkles>
      </motion.div>

      <div className="flex flex-col gap-y-40">
        <div className="flex flex-col gap-y-20">
          <PointerHighlight paddingInline={8}>
            <h4 className="text-2xl font-bold text-foreground-light">Front-End</h4>
          </PointerHighlight>
          Content TBD
        </div>
      </div>
    </motion.section>
  )
}


export default TechStack
