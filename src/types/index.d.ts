import { Icon, IconDefinition } from '@fortawesome/fontawesome-svg-core'
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

export type RouterLocationDescriptor = Location | string

export interface BaseAction {
  id?: string
  label: string
}

export interface Action extends BaseAction {
  href?: string
  external?: boolean
  to?: RouterLocationDescriptor
  onAction?: () => void
}

export interface LinkAction extends BaseAction {
  to: RouterLocationDescriptor
}

export interface AnchorAction extends BaseAction {
  href: string
  external?: boolean
}

export interface CallbackAction extends BaseAction {
  onAction: () => void
}

export type GenericAction = AnchorAction | CallbackAction | LinkAction

export interface DisableableAction extends Action {
  disabled?: boolean
}

export interface DangerousAction extends Action {
  dangerous?: boolean
}

export interface IconableAction extends Action {
  icon?: IconDefinition
}

export interface LoadableAction extends Action {
  isLoading?: boolean
  loadingIcon?: IconDefinition
  loadingLabel?: string
}

export interface SecondaryAction
  extends Action,
    DisableableAction,
    DangerousAction,
    IconableAction {}

export interface PrimaryAction
  extends Action,
    DisableableAction,
    DangerousAction,
    IconableAction,
    LoadableAction {}
