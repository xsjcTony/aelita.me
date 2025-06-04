import type { RefObject } from 'react'
import { useEffect, useRef, useState } from 'react'


type Size = {
  width: number
  height: number
}


const INITIAL_SIZE: Size = {
  width: 0,
  height: 0,
}


export function useResizeObserver<T extends HTMLElement = HTMLElement>(
  el: RefObject<T | null>,
  onResize?: (size: Size) => void,
  box: 'border-box' | 'content-box' = 'content-box',
): Size {

  const [{ width, height }, setSize] = useState<Size>(INITIAL_SIZE)


  const resizeHandlerRef = useRef(onResize)


  useEffect(() => {
    const element = el.current

    if (!element)
      return

    const boxProp = (
      box === 'content-box' ? 'contentBoxSize' : 'borderBoxSize'
    ) satisfies keyof ResizeObserverEntry

    const observer = new ResizeObserver(([entry]) => {
      if (!entry)
        return

      const _observedSize = entry[boxProp][0]

      const newSize: Size = {
        width: _observedSize?.inlineSize ?? 0,
        height: _observedSize?.blockSize ?? 0,
      }

      resizeHandlerRef.current?.(newSize)

      setSize(newSize)
    })

    observer.observe(element, { box })

    return () => void observer.disconnect()

  }, [box, el])


  return { width, height }
}
