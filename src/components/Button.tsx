import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { StitchesVariants } from '@stitches/react'
import { ButtonHTMLAttributes } from 'react'

import ButtonElement from '@/elements/Button'
import Icon from '@/elements/Icon'

type ButtonVariants = StitchesVariants<typeof ButtonElement>

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants & {
  iconLeft?: IconDefinition
  iconRight?: IconDefinition
  text: string
  spinIconLeft?: boolean
}

const Button = ({ iconLeft, iconRight, spinIconLeft = false, text, ...rest }: Props) => {
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
