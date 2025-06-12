import type { RefObject } from 'react'
import { useRef } from 'react'
import { useMount } from '@hooks/useMount'


export function useBodyRef(): RefObject<HTMLElement | null> {
  const bodyRef = useRef<HTMLElement>(null)

  useMount(() => bodyRef.current = document.body)

  return bodyRef
}
