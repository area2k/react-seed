import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import { AnchorAction, CallbackAction, GenericAction, LinkAction } from '@/types'

import Button, { ButtonVariants } from '@/components/Button'
import LoadingButton from '@/components/LoadingButton'

import { pauseEvent, stopEvent as stopEventFn } from '@/util/events'

export const isAnchorAction = (action: GenericAction): action is AnchorAction => (
  (action as AnchorAction).href !== undefined
)

export const isCallbackAction = (action: GenericAction): action is CallbackAction => (
  (action as CallbackAction).onAction !== undefined
)

export const isLinkAction = (action: GenericAction): action is LinkAction => (
  (action as LinkAction).to !== undefined
)

export type Props = ButtonVariants & {
  action: GenericAction
  stopEvent?: boolean
}

const Action = ({ action, stopEvent = false, ...props }: Props) => {
  const defaultProps = {
    ...props,
    iconLeft: action.icon,
    status: action.dangerous ? 'danger' : props.status
  }

  if (isAnchorAction(action)) {
    return (
      <Button
        appearance='plain'
        {...defaultProps}
        as='a'
        id={action.id}
        href={action.href}
        iconRight={action.external ? faExternalLinkAlt : undefined}
        target={action.external ? '_blank' : undefined}
        text={action.label}
        rel={action.external ? 'noopener noreferrer' : undefined}
        onClick={stopEvent ? stopEventFn : undefined}
      />
    )
  } else if (isCallbackAction(action)) {
    const onAction = stopEvent ? pauseEvent(action.onAction) : action.onAction

    if (action.isLoading !== undefined) {
      return (
        <LoadingButton
          {...defaultProps}
          disabled={action.disabled}
          id={action.id}
          isLoading={action.isLoading}
          loadingIcon={action.loadingIcon}
          loadingText={action.loadingLabel}
          text={action.label}
          onClick={onAction}
        />
      )
    } else {
      return (
        <Button
          {...defaultProps}
          disabled={action.disabled}
          id={action.id}
          text={action.label}
          onClick={onAction}
        />
      )
    }
  } else if (isLinkAction(action)) {
    return (
      <Button
        appearance='plain'
        {...defaultProps}
        as={Link}
        id={action.id}
        text={action.label}
        to={action.to}
        onClick={stopEvent ? stopEventFn : undefined}
      />
    )
  } else {
    return null
  }
}

export default Action
