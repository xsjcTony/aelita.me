import { useEffect, useRef } from 'react'


export function useMount(fn: () => void): void {
  const funcRef = useRef(fn)

  useEffect(() => {
    funcRef.current()
  }, [])
}
