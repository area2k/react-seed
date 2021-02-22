import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

import Button, { Props as ButtonProps } from '@/components/Button'

type Props = ButtonProps & {
  isLoading: boolean
  loadingIcon?: IconDefinition
  loadingText?: string
}

const LoadingButton = ({ disabled, iconLeft, iconRight, isLoading, loadingIcon = faCircleNotch, loadingText = 'Loading...', spinIconLeft, text, ...props }: Props) => {
  return (
    <Button
      {...props}
      disabled={isLoading || disabled}
      iconLeft={isLoading ? loadingIcon : iconLeft}
      iconRight={isLoading ? undefined : iconRight}
      spinIconLeft={isLoading || spinIconLeft}
      text={isLoading ? loadingText : text}
    />
  )
}

export default LoadingButton
