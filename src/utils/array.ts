export function sortByReference<T>(
  referenceOrder: T[] | readonly T[],
  input: NoInfer<T>[] | readonly NoInfer<T>[],
): T[] {
  const orderMap = new Map(
    referenceOrder.map((item, index) => [item, index]),
  )

  return input
    .filter(item => orderMap.has(item))
    // eslint-disable-next-line ts/no-non-null-assertion
    .toSorted((a, b) => (orderMap.get(a)!) - (orderMap.get(b)!))
}
