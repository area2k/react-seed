import { ApolloClient, ApolloLink, from, HttpLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

import ls, { ACCESS_TOKEN_KEY, DEVICE_TOKEN_KEY } from '@/util/localstorage'

import Config from '@/config'

export const AUTH_HEADER = 'authorization'
export const CLIENT_HEADER = 'x-client'
export const CLIENT_VERSION_HEADER = 'x-client-version'
export const NEW_TOKEN_HEADER = 'x-refreshed-token'
export const REFRESH_HEADER = 'x-refresh'
export const REQUEST_ID_HEADER = 'x-request-id'

const clientVersion = `${Config.BUILD_VERSION}-${Config.BUILD_COMMIT}`

// ==
// HTTP config
// ==
const httpLink = new HttpLink({
  uri: Config.GRAPHQL_ENDPOINT
})

// ==
// Authentication
// ==
const authLink = new ApolloLink((operation, forward) => {
  const customHeaders: Record<string, string> = {
    [CLIENT_HEADER]: 'area2k-app',
    [CLIENT_VERSION_HEADER]: clientVersion
  }

  const [accessToken, deviceToken] = ls.multiGet(ACCESS_TOKEN_KEY, DEVICE_TOKEN_KEY)

  if (accessToken) customHeaders[AUTH_HEADER] = accessToken
  if (deviceToken) customHeaders[REFRESH_HEADER] = deviceToken

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      ...customHeaders
    }
  }))

  return forward(operation)
})

const tokenRefreshLink = new ApolloLink((operation, forward) => (
  forward(operation).map((response) => {
    const { response: { headers } } = operation.getContext()
    const newToken = headers.get(NEW_TOKEN_HEADER)

    if (newToken) ls.set(ACCESS_TOKEN_KEY, newToken)

    return response
  })
))

// ==
// Error handling
// ==
const serverErrorLink = onError(({ networkError }) => {
  if (networkError) {
    console.error('[apollo]', '(serverErrorLink)', networkError)
  }
})

// ==
// Debug logging
// ==
const loggerLink = new ApolloLink((operation, forward) => (
  forward(operation).map((response) => {
    const context = operation.getContext()
    const requestId = context.response.headers.get(REQUEST_ID_HEADER)

    console.log(`[apollo]', '(${requestId})`, response)

    return response
  })
))

// ==
// Composition
// ==

const httpLinkWithMiddleware = loggerLink.concat(
  serverErrorLink.concat(
    tokenRefreshLink.concat(httpLink)
  )
)

export default new ApolloClient({
  cache: new InMemoryCache({}),
  link: from([
    authLink,
    httpLinkWithMiddleware
  ]),
  resolvers: {}
})
