import { FormError as UseFormError } from '@area2k/use-form'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { LinkProps } from 'react-router-dom'

import { Variants } from '@/components/Alert'

export type ActionAppearance = 'primary' | 'secondary' | 'outline' | 'clear' | 'plain'
export type ActionStatus = 'danger' | 'neutral' | 'success'

export type RouterLocationDescriptor = LinkProps['to']

export interface FormError extends UseFormError {
  icon?: IconDefinition
  title: string
  status?: Variants['status']
}

export interface BaseAction {
  a11yLabel: string
  dangerous?: boolean
  icon?: IconDefinition
  id?: string
  label?: string
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

export interface ActionList<Action extends BaseAction = GenericAction> extends BaseAction {
  actions: Action[][]
  disabled?: boolean
}

export type GenericActionOrList = GenericAction | ActionList
