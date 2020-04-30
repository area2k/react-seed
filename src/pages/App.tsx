import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/components/GlobalStyle'
import Input from '@/components/Input'

const App = () => {
  return (
    <ThemeProvider theme={{ primary500: 'blue' }}>
      <GlobalStyle />
      <Input
        placeholder='Text goes here'
      />
    </ThemeProvider>
  )
}

export default App
