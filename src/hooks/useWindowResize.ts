import { useEffect, useRef } from 'react'


export function useWindowResize(callback: ResizeObserverCallback): void {
  const callbackRef = useRef(callback)

  useEffect(() => {
    const resizeObserver = new ResizeObserver(callbackRef.current)

    resizeObserver.observe(document.body)

    return () => void resizeObserver.disconnect()
  }, [])
}
