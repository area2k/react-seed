import qs from 'query-string'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import MainLayout from '@/components/MainLayout'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

const isSignedIn = true

const Authenticated = () => {
  const location = useLocation()

  // TODO: check auth state and redirect
  if (!isSignedIn) {
    return (
      <Navigate
        replace
        to={{
          pathname: '/login',
          search: `?${qs.stringify({ to: location.pathname })}`
        }}
      />
    )
  }

  return (
    <MainLayout
      Footer={<Footer />}
      Navbar={<Navbar />}
      Sidebar={<Sidebar />}
    >
      <Outlet />
    </MainLayout>
  )
}

export default Authenticated
