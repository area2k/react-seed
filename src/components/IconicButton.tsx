import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { StitchesVariants } from '@stitches/react'
import { ComponentProps } from 'react'

import Icon from '@/elements/Icon'
import IconicButtonElement from '@/elements/IconicButton'

type IconicButtonVariants = StitchesVariants<typeof IconicButtonElement>

export type Props = ComponentProps<typeof IconicButtonElement> & IconicButtonVariants & {
  icon: IconDefinition,
  spin?: boolean
}

const IconicButton = ({ icon, spin = false, ...rest }: Props) => {
  return (
    <IconicButtonElement {...rest}>
      <Icon fixedWidth spin={spin} icon={icon} />
    </IconicButtonElement>
  )
}

export default IconicButton
