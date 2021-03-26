import { ApolloError } from '@apollo/client'
import { GraphQLError } from 'graphql'

import EmptyState, { Props as EmptyStateProps } from '@/components/EmptyState'

import { hasGraphQLErrors } from '@/util/error'
import { faExclamationCircle, faFireAlt, faQuestionCircle, faUnlink } from '@fortawesome/free-solid-svg-icons'
import { useCallback } from 'react'

type ErrorEmptyStateProps = Omit<EmptyStateProps, 'error'>
type ErrorHandler = (err: GraphQLError) => ErrorEmptyStateProps
export type ErrorMap = { [code: string]: ErrorHandler } & { all?: ErrorHandler }

const defaultEmptyStateProps: ErrorEmptyStateProps = {
  icon: faExclamationCircle,
  title: 'An error ocurred',
  text: 'An unknown error ocurred while loading your data.'
}

const defaultErrorMap: ErrorMap = {
  all: () => defaultEmptyStateProps
}

export type Props = {
  error: ApolloError
  errorMap?: ErrorMap
}

const ErrorEmptyState = ({ error, errorMap = defaultErrorMap }: Props) => {
  const defaultErrorHandler = useCallback((gqlError: GraphQLError) => (
    errorMap.all ? errorMap.all(gqlError) : defaultEmptyStateProps
  ), [errorMap.all])

  if (hasGraphQLErrors(error)) {
    const graphQLError = error.graphQLErrors[0]
    const emptyStateProps = graphQLError && graphQLError.extensions
      ? (errorMap[graphQLError.extensions.code] || defaultErrorHandler)(graphQLError)
      : defaultEmptyStateProps

    return <EmptyState error {...emptyStateProps} />
  } else {
    if (error.networkError) {
      if (error.networkError.message.endsWith('Failed to fetch')) {
        return (
          <EmptyState
            error
            icon={faUnlink}
            title='Connection error'
            text='Unable to connect to the remote server.'
          />
        )
      } else if (error.networkError.name === 'ServerError') {
        return (
          <EmptyState
            error
            icon={faFireAlt}
            title='Server error'
            text='A server error has ocurrred, please contact support.'
          />
        )
      } else {
        return (
          <EmptyState
            error
            icon={faQuestionCircle}
            title='Network error'
            text='An unknown network error has ocurred, please contact support.'
          />
        )
      }
    } else {
      return (
        <EmptyState
          error
          icon={faQuestionCircle}
          title='Unknown error'
          text='An unknown error has ocurred, please contact support.'
        />
      )
    }
  }
}

export default ErrorEmptyState
