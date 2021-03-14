import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import { CommonProps } from './types'

import Button, { ButtonVariants } from '@/components/Button'

import { isAnchorAction, isCallbackAction, isLinkAction } from '@/util/actions'
import { pauseEvent, stopEvent as stopEventFn } from '@/util/events'

export type Props = CommonProps & ButtonVariants & {
  stopEvent?: boolean
}

const ActionButton = ({ action, stopEvent = false, status, ...rest }: Props) => {
  const commonProps = {
    ...rest,
    a11yLabel: action.a11yLabel,
    iconLeft: action.icon,
    id: action.id,
    label: action.label,
    status: action.dangerous ? 'danger' : status
  }

  if (isAnchorAction(action)) {
    return (
      <Button
        appearance='plain'
        {...commonProps}
        as='a'
        href={action.href}
        iconRight={(action.external && action.label) ? faExternalLinkAlt : undefined}
        target={action.external ? '_blank' : undefined}
        rel={action.external ? 'noopener noreferrer' : undefined}
      />
    )
  } else if (isCallbackAction(action)) {
    return (
      <Button
        {...commonProps}
        disabled={action.disabled}
        onClick={stopEvent ? pauseEvent(action.onAction) : action.onAction}
      />
    )
  } else if (isLinkAction(action)) {
    return (
      <Button
        appearance='plain'
        {...commonProps}
        as={Link}
        to={action.to}
        onClick={stopEvent ? stopEventFn : undefined}
      />
    )
  } else {
    return null
  }
}

export default ActionButton
