import { ApolloProvider } from '@apollo/client'
import { ModalProvider } from '@area2k/use-modal'
import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/components/GlobalStyle'

import RouterDebug from '@/widgets/RouterDebug'

import Main from '@/pages/Main'

import client from '@/util/apollo'

// NOTE: assigned to const ref for perf reasons
const theme = {}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <RouterDebug />
          <ModalProvider>
            <Switch>
              <Route path='/'>
                <Main />
              </Route>
            </Switch>
          </ModalProvider>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default hot(App)
