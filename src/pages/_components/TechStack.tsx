import type { TechStackItem } from '@components/TechStackCards'
import type { FC } from 'react'
import { motion } from 'motion/react'
import PointerHighlight from '@components/PointerHighlight'
import TechStackCards from '@components/TechStackCards'
import WithSparkles from '@components/WithSparkles'
import { TECH_STACK_BACKEND, TECH_STACK_FRONTEND, TECH_STACK_LANGUAGES } from '@constants/techStacks'
import { useFadeInWhenParentIsInView } from '@hooks/useFadeInWhenParentIsInView'


type StackProps = {
  title: string
  highlighted?: boolean
  techStacks: TechStackItem[]
}


const Stack: FC<StackProps> = ({
  title,
  highlighted = false,
  techStacks,
}) => (
  <div className="flex flex-col">
    {highlighted
      ? (
        <PointerHighlight delay={1} paddingInline={8}>
          <h4 className="text-2xl font-bold text-fg-light">{title}</h4>
        </PointerHighlight>
      )
      : <h4 className="text-2xl font-bold text-fg-light">{title}</h4>}
    <TechStackCards items={techStacks} />
  </div>
)


const TechStack: FC = () => {

  const {
    containerElRef,
    animateElScope,
  } = useFadeInWhenParentIsInView<HTMLElement, HTMLHeadingElement>({ margin: '-180px 0px' })


  return (
    <motion.section ref={containerElRef} className="container py-80" id="tech-stack">
      <motion.div ref={animateElScope} className="mb-40" initial={{ opacity: 0, y: 20 }}>
        <WithSparkles>
          <h2 className="text-3xl text-center font-bold text-fg-lighter">Tech Stack</h2>
        </WithSparkles>
      </motion.div>

      <div className="flex flex-col gap-y-20">
        <Stack techStacks={TECH_STACK_LANGUAGES} title="Languages" />
        <Stack highlighted techStacks={TECH_STACK_FRONTEND} title="Front-End" />
        <Stack techStacks={TECH_STACK_BACKEND} title="Back-End" />
      </div>
    </motion.section>
  )
}


export default TechStack
