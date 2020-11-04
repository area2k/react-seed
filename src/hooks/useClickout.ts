import { useEffect, useRef } from 'react'

import debug from '@/util/debug'

type ClickoutHandler = (ev: MouseEvent) => void
type ClickoutOptions = { debugName?: string, isActive?: boolean }

const DEFAULT_OPTIONS: ClickoutOptions = { isActive: true }

const useClickout = <T extends HTMLElement>(onClickout: ClickoutHandler, options: ClickoutOptions = DEFAULT_OPTIONS) => {
  const ref = useRef<T>(null)

  const debugDisplay = options.debugName || ref.current

  useEffect(() => {
    if (!ref.current || !options.isActive) return

    function clickout (ev: MouseEvent) {
      if (!ev.composedPath().some((element) => element === ref.current)) {
        debug.log('[useClickout]', debugDisplay, 'click outside')
        onClickout(ev)
      } else {
        debug.log('[useClickout]', debugDisplay, 'click inside')
      }
    }

    debug.log('[useClickout]', debugDisplay, 'attach click handler')
    window.addEventListener('click', clickout)

    return () => {
      debug.log('[useClickout]', debugDisplay, 'detatch click handler')
      window.removeEventListener('click', clickout)
    }
  }, [options.isActive, ref.current, onClickout])

  return ref
}

export default useClickout
