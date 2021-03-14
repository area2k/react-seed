import { ReactNode } from 'react'

import { AnchorAction, CallbackAction, LinkAction } from '@/types'
import { CommonProps } from './types'

import Button from './Button'

import { isAnchorAction, isCallbackAction, isLinkAction } from '@/util/actions'

export type Props = CommonProps & {
  renderAnchor: (action: AnchorAction) => ReactNode
  renderCallback: (action: CallbackAction) => ReactNode
  renderLink: (action: LinkAction) => ReactNode
}

const Action = ({ action, renderAnchor, renderCallback, renderLink }: Props) => {
  if (isAnchorAction(action)) {
    return renderAnchor(action)
  } else if (isCallbackAction(action)) {
    return renderCallback(action)
  } else if (isLinkAction(action)) {
    return renderLink(action)
  } else {
    return null
  }
}

Action.Button = Button

export default Action
