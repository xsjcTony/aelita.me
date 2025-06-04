import { useEffect, useState } from 'react'


type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}


export function useMediaQuery(
  query: string,
  { defaultValue = false, initializeWithValue = true }: UseMediaQueryOptions = {},
): boolean {

  // eslint-disable-next-line ts/no-unnecessary-condition
  const getMatches = (query: string): boolean => globalThis.window === void 0
    ? defaultValue
    : globalThis.matchMedia(query).matches


  const [matches, setMatches] = useState<boolean>(
    () => initializeWithValue ? getMatches(query) : defaultValue,
  )


  const handleChange = (): void => {
    setMatches(getMatches(query))
  }


  useEffect(() => {
    const abortController = new AbortController()

    const matchMedia = globalThis.matchMedia(query)

    handleChange()

    matchMedia.addEventListener('change', handleChange, { signal: abortController.signal })

    return () => void abortController.abort()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}
