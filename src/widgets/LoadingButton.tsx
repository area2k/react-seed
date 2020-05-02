import React from 'react'

import Button from '@/components/Button'
import Icon from '@/components/Icon'

interface Props
  extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactElement | React.ReactElement[]
  icon?: string
  isLoading: boolean
  prompt?: string
}

const LoadingButton = ({ children, icon = 'circle-notch', isLoading, prompt, ...rest }: Props) => (
  <Button disabled={isLoading} {...rest}>
    {isLoading &&
      <Icon spin icon={icon} />
    }
    {isLoading
      ? prompt || children
      : children
    }
  </Button>
)

export default LoadingButton
