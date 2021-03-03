import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { StitchesVariants } from '@stitches/react'
import { ComponentPropsWithoutRef, VFC } from 'react'

import ButtonElement from '@/elements/Button'
import Icon from '@/elements/Icon'

type ButtonVariants = StitchesVariants<typeof ButtonElement>

export type Props = ComponentPropsWithoutRef<'button'> & ButtonVariants & {
  iconLeft?: IconDefinition
  iconRight?: IconDefinition
  text: string
  spinIconLeft?: boolean
}

export const Button: VFC<Props> = ({ iconLeft, iconRight, spinIconLeft = false, text, ...rest }) => {
  return (
    <ButtonElement {...rest}>
      {iconLeft &&
        <Icon fixedWidth spin={spinIconLeft} icon={iconLeft} />
      }
      {text}
      {iconRight &&
        <Icon fixedWidth icon={iconRight} />
      }
    </ButtonElement>
  )
}

export default Button
