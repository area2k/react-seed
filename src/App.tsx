import { ApolloProvider } from '@apollo/client'
import { ModalProvider } from '@area2k/use-modal'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import RouterDebug from '@/components/RouterDebug'

import Authenticated from '@/routes/Authenticated'
import Dashboard from '@/routes/Dashboard'
import Login from '@/routes/Login'
import Root from '@/routes/Root'

import client from '@/util/apollo/client'

import Config from '@/config'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <RouterDebug />
        <ModalProvider>
          <Routes basename={Config.BASEPATH}>
            <Route element={<Root />}>
              <Route element={<Authenticated />}>
                <Route element={<Dashboard />} path='/' />
              </Route>
              <Route element={<Login />} path='login' />
            </Route>
          </Routes>
        </ModalProvider>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
