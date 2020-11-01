// Fix imports of *.gql files in *.ts/tsx files
// SEE: https://github.com/apollographql/graphql-tag/issues/59#issuecomment-531517814
declare module '*.gql' {
  import { DocumentNode } from 'graphql'

  const value: DocumentNode
  export = value
}
