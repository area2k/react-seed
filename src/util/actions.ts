import { ActionList, AnchorAction, BaseAction, CallbackAction, GenericAction, GenericActionOrList, LinkAction } from '@/types'

export const isAnchorAction = (action: GenericActionOrList): action is AnchorAction => (
  (action as AnchorAction).href !== undefined
)

export const isCallbackAction = (action: GenericActionOrList): action is CallbackAction => (
  (action as CallbackAction).onAction !== undefined
)

export const isLinkAction = (action: GenericActionOrList): action is LinkAction => (
  (action as LinkAction).to !== undefined
)

export const isActionList = (action: GenericActionOrList): action is ActionList => (
  (action as ActionList).actions !== undefined
)

export const flattenActionsToList = (actions: GenericActionOrList[], base: BaseAction): ActionList => {
  const listActions: GenericAction[][] = []
  let looseActions: GenericAction[] = []

  for (const action of actions) {
    if (isActionList(action)) {
      if (looseActions.length > 0) {
        listActions.push(looseActions)
        looseActions = []
      }
      listActions.concat(action.actions)
    } else {
      looseActions.push(action)
    }
  }

  if (looseActions.length > 0) listActions.push(looseActions)

  return { ...base, actions: listActions }
}

export const noOp = () => undefined
