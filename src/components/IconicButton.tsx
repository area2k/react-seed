import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { StitchesVariants } from '@stitches/react'
import { ComponentProps } from 'react'

import Icon from '@/elements/Icon'
import IconicButtonElement from '@/elements/IconicButton'

type IconicButtonVariants = StitchesVariants<typeof IconicButtonElement>

export type Props = ComponentProps<typeof IconicButtonElement> & IconicButtonVariants & {
  a11yLabel: string
  icon: IconDefinition,
  isLoading?: boolean
  loadingA11yLabel?: string
  loadingIcon?: IconDefinition
  spin?: boolean
}

const IconicButton = ({ a11yLabel, disabled, icon, isLoading, loadingA11yLabel, loadingIcon = faCircleNotch, spin = false, ...rest }: Props) => {
  return (
    <IconicButtonElement
      {...rest}
      aria-label={isLoading ? (loadingA11yLabel || a11yLabel) : a11yLabel}
      disabled={isLoading || disabled}
    >
      <Icon fixedWidth spin={spin} icon={isLoading ? loadingIcon : icon} />
    </IconicButtonElement>
  )
}

export default IconicButton
