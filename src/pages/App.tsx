import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/components/GlobalStyle'

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
