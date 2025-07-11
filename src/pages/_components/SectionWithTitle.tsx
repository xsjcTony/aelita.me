import type { FC, ReactNode } from 'react'
import { motion } from 'motion/react'
import WithSparkles from '~components/WithSparkles'
import { useFadeInWhenParentIsInView } from '~hooks/useFadeInWhenParentIsInView'
import { cn } from '~utils/className'


type SectionWithTitleProps = {
  children: ReactNode
  title: string
  isContainer?: boolean
}


const SectionWithTitle: FC<SectionWithTitleProps> = ({
  children,
  title,
  isContainer = true,
}) => {

  const {
    containerElRef,
    animateElScope,
  } = useFadeInWhenParentIsInView<HTMLElement, HTMLHeadingElement>({ margin: '-180px 0px' })


  return (
    <motion.section
      ref={containerElRef}
      className={cn('py-80', isContainer && 'container')}
      id={title}
    >
      <motion.div
        ref={animateElScope}
        className="mb-40 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
      >
        <motion.div className="flex flex-col items-center">
          <WithSparkles>
            <h2 className="text-h2 text-center">{title}</h2>
          </WithSparkles>
        </motion.div>
      </motion.div>

      {children}
    </motion.section>
  )
}


export default SectionWithTitle
