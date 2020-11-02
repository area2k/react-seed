import { useEffect, useRef } from 'react'

import debug from '@/util/debug'

type ClickoutHandler = (ev: MouseEvent) => void
type ClickoutOptions = { isActive?: boolean }

const DEFAULT_OPTIONS: ClickoutOptions = { isActive: true }

const useClickout = <T extends HTMLElement>(onClickout: ClickoutHandler, options: ClickoutOptions = DEFAULT_OPTIONS) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current || !options.isActive) return

    function clickout (ev: MouseEvent) {
      if (!ev.composedPath().some((element) => element === ref.current)) {
        debug.log('[useClickout]', ref.current, 'click outside')
        onClickout(ev)
      } else {
        debug.log('[useClickout]', ref.current, 'click inside')
      }
    }

    debug.log('[useClickout]', ref.current, 'attach click handler')
    window.addEventListener('click', clickout)

    return () => {
      debug.log('[useClickout]', ref.current, 'detatch click handler')
      window.removeEventListener('click', clickout)
    }
  }, [options.isActive, ref.current, onClickout])

  return ref
}

export default useClickout
