import { useEffect, useRef } from 'react'


export function useMount(callback: () => void): void {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current()
  }, [])
}
