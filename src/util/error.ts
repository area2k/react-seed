import { ApolloError } from '@apollo/client'
import { SubmitHelpers } from '@area2k/use-form'
import { faFire, faQuestionCircle, faUnlink } from '@fortawesome/free-solid-svg-icons'
import { GraphQLError } from 'graphql'

import debug from '@/util/debug'

type ErrorHandler = (error: GraphQLError) => void
type HandlerMap = Record<string, ErrorHandler>

export const handleGraphQLError = (error: ApolloError, handlers: HandlerMap) => {
  debug.log('[handleGraphQLError]', error)

  if (error.networkError || !error.graphQLErrors) {
    debug.error('[handleGraphQLError]', 'cannot handle:', error)
    return
  }

  const defaultHandler = (gqlError: GraphQLError) => (
    handlers.all && handlers.all(gqlError)
  )

  error.graphQLErrors.forEach((gqlError) => {
    const { extensions } = gqlError
    let handler = defaultHandler

    if (extensions && extensions.code) {
      handler = handlers[extensions.code.toUpperCase()] || defaultHandler
    }

    handler(gqlError)
  })
}

export const handleUncaughtError = (error: any, setFormError: SubmitHelpers['setFormError']) => {
  debug.error('[handleUncaughtError]', error)

  if (error.networkError) {
    const apolloError = (error as ApolloError).networkError!

    if (apolloError.message.endsWith('Failed to fetch')) {
      setFormError('fetchFailed', {
        icon: faUnlink,
        message: 'Unable to connect to the remote server.',
        title: 'Connection error',
        status: 'danger'
      })
    } else if (apolloError.name === 'ServerError') {
      setFormError('serverError', {
        icon: faFire,
        message: 'A server error has occurred. Please contact support.',
        title: 'Server error',
        status: 'danger'
      })
    } else {
      setFormError('networkError', {
        icon: faQuestionCircle,
        message: apolloError.message,
        status: 'danger'
      })
    }
  } else {
    setFormError('unknown', {
      icon: faFire,
      message: 'An unknown error has occurred. Please contact support.',
      title: 'Unknown error',
      status: 'danger'
    })
  }
}
