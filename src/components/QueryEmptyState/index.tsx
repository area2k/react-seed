import { QueryResult } from '@apollo/client'

import EmptyState, { Props as EmptyStateProps } from '@/components/EmptyState'

import ErrorEmptyState, { ErrorMap } from './ErrorEmptyState'

type Props = EmptyStateProps & {
  errorMap?: ErrorMap
  query: QueryResult<any, any>
}

const QueryEmptyState = ({ errorMap, query, ...emptyStateProps }: Props) => {
  if (query.error) {
    return <ErrorEmptyState error={query.error} errorMap={errorMap} />
  }

  if (!query.data) {
    return null
  }

  return <EmptyState {...emptyStateProps} />
}

QueryEmptyState.ErrorEmptyState = ErrorEmptyState

export default QueryEmptyState
