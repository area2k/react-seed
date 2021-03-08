import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { StitchesVariants } from '@stitches/react'
import { ComponentPropsWithoutRef, VFC } from 'react'

import ButtonElement from '@/elements/Button'
import Icon from '@/elements/Icon'

type ButtonVariants = StitchesVariants<typeof ButtonElement>

export type Props = ComponentPropsWithoutRef<'button'> & ButtonVariants & {
  hasPopover?: boolean
  iconLeft?: IconDefinition
  iconRight?: IconDefinition
  text: string
  spinIconLeft?: boolean
}

export const Button: VFC<Props> = ({ "aria-haspopup": ariaHasPopup, css, hasPopover, iconLeft, iconRight, spinIconLeft = false, text, ...rest }) => {
  const popoverCss = (hasPopover || ariaHasPopup) ? { paddingRight: 0 } : {}
  const customizedCss = css ? { ...css, ...popoverCss } : popoverCss

  return (
    <ButtonElement
      {...rest}
      aria-haspopup={ariaHasPopup}
      css={customizedCss}
    >
      {iconLeft &&
        <Icon fixedWidth spin={spinIconLeft} icon={iconLeft} />
      }
      {text}
      {iconRight &&
        <Icon fixedWidth icon={iconRight} />
      }
      {(hasPopover || ariaHasPopup) &&
        <span style={{ paddingRight: '12px' }}>
          <Icon fixedWidth icon={faCaretDown} />
        </span>
      }
    </ButtonElement>
  )
}

export default Button
