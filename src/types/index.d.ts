import { Icon, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Location } from 'history'
import { LinkProps } from 'react-router-dom'

// Fix imports of *.gql files in *.ts/tsx files
// SEE: https://github.com/apollographql/graphql-tag/issues/59#issuecomment-531517814
declare module '*.gql' {
  import { DocumentNode } from 'graphql'

  const value: DocumentNode
  export = value
}

export type ActionAppearance = 'primary' | 'secondary' | 'outline' | 'clear' | 'plain'
export type ActionStatus = 'danger' | 'neutral' | 'success'

export type RouterLocationDescriptor = LinkProps['to']

export interface BaseAction {
  a11yLabel: string
  dangerous?: boolean
  icon?: IconDefinition
  id?: string
  label?: string
}

export interface Action extends BaseAction {
  href?: string
  external?: boolean
  to?: RouterLocationDescriptor
  onAction?: () => void
}

export interface LinkAction extends BaseAction {
  end?: boolean
  navigational?: boolean
  to: RouterLocationDescriptor
}

export interface AnchorAction extends BaseAction {
  href: string
  external?: boolean
}

export interface CallbackAction extends BaseAction {
  disabled?: boolean
  isLoading?: boolean
  loadingIcon?: IconDefinition
  loadingLabel?: string
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
