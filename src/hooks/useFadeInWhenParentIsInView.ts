import type { AnimationScope } from 'motion'
import type { UseInViewOptions } from 'motion/react'
import type { RefObject } from 'react'
import { useAnimate, useInView } from 'motion/react'
import { useEffect, useRef } from 'react'


type UseFadeInWhenParentIsInViewOptions = {
  margin: UseInViewOptions['margin']
}


type UseFadeInWhenParentIsInViewReturnType<
  ContainerTag extends HTMLElement,
  AnimateElTag extends HTMLElement,
> = {
  containerElRef: RefObject<ContainerTag | null>
  animateElScope: AnimationScope<AnimateElTag>
}


export function useFadeInWhenParentIsInView<
  ContainerTag extends HTMLElement,
  AnimateElTag extends HTMLElement,
>({ margin }: UseFadeInWhenParentIsInViewOptions): UseFadeInWhenParentIsInViewReturnType<
  ContainerTag,
  AnimateElTag
> {
  const containerElRef = useRef<ContainerTag>(null)

  const isContainerVisible = useInView(containerElRef, { once: true, margin })

  const [scope, animate] = useAnimate<AnimateElTag>()


  useEffect(() => {
    isContainerVisible && animate(
      scope.current,
      { opacity: 1, y: 0 },
      { duration: 0.5 },
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isContainerVisible])


  return {
    containerElRef,
    animateElScope: scope,
  }
}
