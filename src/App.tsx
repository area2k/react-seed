import { ApolloProvider } from '@apollo/client'

import Entry from '@/pages/Entry'

import client from '@/util/apollo/client'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Entry />
    </ApolloProvider>
  )
}

export default App
