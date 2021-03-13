import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { StitchesVariants } from '@stitches/react'

import styled from '@/styles'

import Icon from '@/elements/Icon'

import Stack from '@/components/Stack'
import { Body, Display } from '@/components/Typography'

const Wrapper = styled('div', {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',

  variants: {
    overlayColor: {
      light: {
        backgroundColor: '$neutralA12'
      },
      dark: {
        backgroundColor: '$neutralA32'
      },
      transparent: {
        backgroundColor: 'transparent'
      },
      white: {
        backgroundColor: '$whiteA68'
      }
    }
  },

  defaultVariants: {
    overlayColor: 'transparent'
  }
})

export type Props = StitchesVariants<typeof Wrapper> & {
  icon?: IconDefinition
  text?: string
}

const LoadingState = ({ icon = faCircleNotch, text, ...variants }: Props) => {
  return (
    <Wrapper {...variants}>
      <Stack vertical align='center' gap={16} justify='center'>
        <Display>
          <Icon fixedWidth spin icon={icon} />
        </Display>
        {text &&
          <Body>
            {text}
          </Body>
        }
      </Stack>
    </Wrapper>
  )
}

LoadingState.Wrapper = Wrapper
Wrapper.displayName = 'stitches(LoadingState.Wrapper)'

export default LoadingState
