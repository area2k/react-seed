import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import RouterDebug from '@/components/RouterDebug'

import Authenticated from '@/routes/Authenticated'
import Dashboard from '@/routes/Dashboard'
import Login from '@/routes/Login'
import Root from '@/routes/Root'

import client from '@/util/apollo/client'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <RouterDebug />
        <Routes basename='/'>
          <Route element={<Root />}>
            <Route element={<Authenticated />}>
              <Route element={<Dashboard />} path='/' />
            </Route>
            <Route element={<Login />} path='login' />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
