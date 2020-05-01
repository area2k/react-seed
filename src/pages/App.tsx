import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/components/GlobalStyle'

import Main from '@/pages/Main'

import client from '@/util/apollo'

// NOTE: assigned to const ref for perf reasons
const theme = {}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Switch>
            <Route path='/'>
              <Main />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default hot(App)
