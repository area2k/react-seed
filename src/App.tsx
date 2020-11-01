import { ApolloProvider } from '@apollo/client'

import client from '@/util/apollo/client'

const App = () => {
  return (
    <ApolloProvider client={client}>
      Hello world!
    </ApolloProvider>
  )
}

export default App
