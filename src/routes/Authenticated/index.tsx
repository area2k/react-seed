import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import LoadingState from '@/components/LoadingState'

import LoginRedirect from './LoginRedirect'

import ls, { DEVICE_TOKEN_KEY } from '@/util/localstorage'

const Authenticated = () => {
  const deviceToken = ls.get(DEVICE_TOKEN_KEY)
  // TODO: try to get current actor if !!deviceToken
  const query = {} as any

  useEffect(() => {
    if (query.data) {
      // TODO: set current actor
    }

    return () => { /** TODO: clear current actor */ }
  }, [query.data])

  // TODO: check error code to prevent logouts on network/server errors
  if (!deviceToken || query.error) {
    return <LoginRedirect didFailAuth={!!query.error} />
  }

  if (query.loading) {
    return <LoadingState text='Loading your account information...' />
  }

  return <Outlet />
}

export default Authenticated
