import type { FC, ReactNode } from 'react'
import { motion } from 'motion/react'
import WithSparkles from '@components/WithSparkles'
import { useFadeInWhenParentIsInView } from '@hooks/useFadeInWhenParentIsInView'


type SectionWithTitleProps = {
  title: string
  children: ReactNode
}


const SectionWithTitle: FC<SectionWithTitleProps> = ({ title, children }) => {

  const {
    containerElRef,
    animateElScope,
  } = useFadeInWhenParentIsInView<HTMLElement, HTMLHeadingElement>({ margin: '-180px 0px' })


  return (
    <motion.section ref={containerElRef} className="container py-80" id={title}>
      <motion.div ref={animateElScope} className="mb-40" initial={{ opacity: 0, y: 20 }}>
        <WithSparkles>
          <h2 className="text-h2 text-center">{title}</h2>
        </WithSparkles>
      </motion.div>

      {children}
    </motion.section>
  )
}


export default SectionWithTitle
