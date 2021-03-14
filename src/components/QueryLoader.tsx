import { QueryResult } from '@apollo/client'
import { ReactNode } from 'react'

import { loadQuery } from '@/util/apollo'

const defaultWhenLoading = <>Loading...</>
const defaultWhenError = <>Error!</>

export type Props<D, V> = {
  children: (data: D) => ReactNode
  result: QueryResult<D, V>
  whenError?: ReactNode
  whenLoading?: ReactNode
}

const QueryLoader = <D extends any = any, V = Record<string, any>>({ children, result, whenError = defaultWhenError, whenLoading = defaultWhenLoading }: Props<D, V>) => {
  return loadQuery<ReactNode, D, V>(result, children, { whenError, whenLoading })
}

export default QueryLoader
