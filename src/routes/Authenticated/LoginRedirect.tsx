import qs from 'query-string'
import { Navigate, useLocation } from 'react-router-dom'

import ls from '@/util/localstorage'

export type Props = { didFailAuth: boolean }

const LoginRedirect = ({ didFailAuth }: Props) => {
  const location = useLocation()

  ls.clearAuth()

  return (
    <Navigate
      replace
      state={{ didFailAuth, didReroute: true }}
      to={{
        pathname: '/login',
        search: `?${qs.stringify({ to: location.pathname })}`
      }}
    />
  )
}

export default LoginRedirect
