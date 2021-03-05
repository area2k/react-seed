import { Location } from 'history'

// Fix imports of *.gql files in *.ts/tsx files
// SEE: https://github.com/apollographql/graphql-tag/issues/59#issuecomment-531517814
declare module '*.gql' {
  import { DocumentNode } from 'graphql'

  const value: DocumentNode
  export = value
}

export type ActionAppearance = 'primary' | 'secondary' | 'outline' | 'clear' | 'plain'
export type ActionStatus = 'danger' | 'neutral' | 'success'

type ActionBase = {
  appearance?: ActionAppearance
  status?: ActionStatus
  label: string
}

export type AnchorAction = ActionBase & {
  href: string
  target?: string
}

export type LinkAction = ActionBase & {
  to: Location | string
}

export type PressableAction = ActionBase & {
  disabled?: boolean
  onAction: () => void
}

export type LoadableAction = PressableAction & {
  isLoading: boolean
}
