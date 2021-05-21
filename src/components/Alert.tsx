import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { StitchesVariants } from '@stitches/react'
import { ComponentPropsWithoutRef } from 'react'

import styled from '@/styles'

import Icon from '@/elements/Icon'
import Text from '@/elements/Text'

import Stack from '@/components/Stack'
import { Body, Subheading } from '@/components/Typography'

const Wrapper = styled('div', {
  $$bgColor: '$colors$neutralA8',
  $$borderColor: '$colors$neutralLight',
  $$iconColor: '$colors$textDefault',

  alignItems: 'flex-start',
  display: 'flex',
  gap: '1rem',
  padding: '1rem',

  backgroundColor: '$$bgColor',
  border: '1px solid $$borderColor',
  borderRadius: '$lg',
  color: '$$iconColor',

  variants: {
    status: {
      neutral: {},
      theme: {
        $$bgColor: '$colors$themeA8',
        $$borderColor: '$colors$themeLightest',
        $$iconColor: '$colors$themeDarker'
      },
      success: {
        $$bgColor: '$colors$successA8',
        $$borderColor: '$colors$successLightest',
        $$iconColor: '$colors$successDarker'
      },
      warning: {
        $$bgColor: '$colors$warningA8',
        $$borderColor: '$colors$warningLighter',
        $$iconColor: '$colors$warningDarkest'
      },
      danger: {
        $$bgColor: '$colors$dangerA8',
        $$borderColor: '$colors$dangerLightest',
        $$iconColor: '$colors$dangerDarker'
      }
    }
  }
})

Wrapper.displayName = 'stitches(Alert.Wrapper)'

export type Variants = StitchesVariants<typeof Wrapper>
export type Props = ComponentPropsWithoutRef<'div'> & Variants & {
  description: string
  icon: IconDefinition
  title: string
}

const Alert = ({ description, icon, title, ...props }: Props) => {
  return (
    <Wrapper {...props}>
      <Text color='inherit' size='lg'>
        <Icon fixedWidth icon={icon} />
      </Text>
      <Stack vertical align='start' gap={4}>
        <Subheading>
          <strong>{title}</strong>
        </Subheading>
        <Body>
          {description}
        </Body>
      </Stack>
    </Wrapper>
  )
}

export default Alert
