import { useEffect } from 'react'

const useDisableBodyScroll = () => {
  useEffect(() => {
    document.body.classList.add('noscroll')

    return () => document.body.classList.remove('noscroll')
  }, [])
}

export default useDisableBodyScroll
