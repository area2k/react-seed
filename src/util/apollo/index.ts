import { QueryResult } from '@apollo/client'
import { ReactNode } from 'react'

type QueryLoadedFn<T, D> = (data: D) => T
type Options<T> = {
  whenLoading?: T
  whenError?: T
}

interface LoadQueryFn {
  <T extends any = ReactNode, D = any, V = Record<string, any>>(result: QueryResult<D, V>, whenComplete: QueryLoadedFn<T, D>, options: Required<Options<T>>): T
  <T extends any = ReactNode, D = any, V = Record<string, any>>(result: QueryResult<D, V>, whenComplete: QueryLoadedFn<T, D>, options?: Options<T>): T | null
}

export const loadQuery: LoadQueryFn = (result, whenComplete, options) => {
  if (result.loading) {
    return options && options.whenLoading ? options.whenLoading : null
  }

  if (result.error || !result.data) {
    return options && options.whenError ? options.whenError : null
  }

  return whenComplete(result.data)
}
