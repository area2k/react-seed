export const moveIndex = <T>(source: T[], fromIndex: number, toIndex: number): T[] => {
  const clone = Array.from(source)

  const [item] = clone.splice(fromIndex, 1)
  clone.splice(toIndex, 0, item)

  return clone
}

export const removeAtIndex = <T>(source: T[], atIndex: number, count: number = 1) => {
  const clone = Array.from(source)

  clone.splice(atIndex, count)

  return clone
}

export const insertAtIndex = <T>(source: T[], atIndex: number, ...items: T[]) => {
  return replaceAtIndex(source, atIndex, 0, ...items)
}

export const replaceAtIndex = <T>(source: T[], atIndex: number, removeCount: number, ...items: T[]) => {
  const clone = Array.from(source)

  clone.splice(atIndex, removeCount, ...items)

  return clone
}
