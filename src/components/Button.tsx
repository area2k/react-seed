import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { StitchesVariants } from '@stitches/react'
import { ComponentPropsWithoutRef, VFC } from 'react'

import ButtonElement from '@/elements/Button'
import Icon from '@/elements/Icon'

import IconicButton from '@/components/IconicButton'

export type ButtonVariants = StitchesVariants<typeof ButtonElement>

export type Props = ComponentPropsWithoutRef<'button'> & ButtonVariants & {
  a11yLabel: string
  hasPopover?: boolean
  iconLeft?: IconDefinition
  iconRight?: IconDefinition
  isLoading?: boolean
  label?: string
  loadingA11yLabel?: string
  loadingIcon?: IconDefinition
  loadingLabel?: string
}

export const Button = ({ a11yLabel, "aria-haspopup": ariaHasPopup, css, disabled, hasPopover, iconLeft, iconRight, isLoading, label, loadingA11yLabel, loadingIcon = faCircleNotch, loadingLabel = 'Loading...', ...rest }: Props) => {
  const popoverCss = (hasPopover || ariaHasPopup) ? { paddingRight: 0 } : {}
  const customizedCss = css ? { ...css, ...popoverCss } : popoverCss

  if (iconLeft && !label) {
    return (
      <IconicButton
        {...rest}
        a11yLabel={a11yLabel}
        icon={iconLeft}
        isLoading={isLoading}
        loadingA11yLabel={loadingA11yLabel}
        loadingIcon={loadingIcon}
        size={rest.appearance === 'plain' ? 'xs' : undefined}
      />
    )
  }

  return (
    <ButtonElement
      {...rest}
      aria-haspopup={ariaHasPopup}
      aria-label={isLoading ? (loadingA11yLabel || a11yLabel) : a11yLabel}
      css={customizedCss}
      disabled={isLoading || disabled}
    >
      {(isLoading || iconLeft) &&
        <Icon
          fixedWidth
          spin={isLoading}
          icon={isLoading ? loadingIcon : iconLeft!}
        />
      }
      {isLoading ? loadingLabel : label || a11yLabel}
      {iconRight &&
        <Icon fixedWidth icon={iconRight} />
      }
      {(hasPopover || ariaHasPopup) &&
        <span style={{ paddingRight: rest.appearance === 'plain' ? 2 : 12 }}>
          <Icon fixedWidth icon={faCaretDown} />
        </span>
      }
    </ButtonElement>
  )
}

export default Button
