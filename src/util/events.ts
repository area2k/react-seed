export const pauseEvent = <T extends any>(cb: () => T) => (ev?: React.UIEvent<any>): T => {
  if (ev) {
    ev.stopPropagation()
    ev.preventDefault()
  }

  return cb()
}
