import { AnchorAction, CallbackAction, GenericAction, LinkAction } from '@/types'

export const isAnchorAction = (action: GenericAction): action is AnchorAction => (
  (action as AnchorAction).href !== undefined
)

export const isCallbackAction = (action: GenericAction): action is CallbackAction => (
  (action as CallbackAction).onAction !== undefined
)

export const isLinkAction = (action: GenericAction): action is LinkAction => (
  (action as LinkAction).to !== undefined
)

export const noOp = () => undefined
