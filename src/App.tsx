import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import RouterDebug from '@/components/RouterDebug'

import Root from '@/routes/Root'

import client from '@/util/apollo/client'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <RouterDebug />
        <Routes basename='/'>
          <Route element={<Root />}>
            <Route element={<div>Hello world from router!</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
