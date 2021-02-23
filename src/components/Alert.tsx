import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { StitchesProps } from '@stitches/react'

import styled from '@/styles'

import Icon from '@/elements/Icon'
import Text from '@/elements/Text'

const Wrapper = styled('div', {
  display: 'flex',
  padding: '1rem 1.5rem',

  backgroundColor: '$YA32',
  borderRadius: '$md',

  fontSize: '1.25rem',

  variants: {
    status: {
      warning: {
        backgroundColor: '$YA32'
      },
      danger: {
        backgroundColor: '$RA16'
      }
    }
  }
})

Wrapper.displayName = 'stitches(Alert.Wrapper)'

const TextContent = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  paddingLeft: '1.5rem'
})

TextContent.displayName = 'stitches(Alert.TextContent)'

type Props = StitchesProps<typeof Wrapper> & {
  description: string
  icon: IconDefinition
  title: string
}

const Alert = ({ description, icon, title, ...props }: Props) => {
  return (
    <Wrapper {...props}>
      <div>
        <Icon icon={icon} />
      </div>
      <TextContent>
        <Text weight='semibold'>
          {title}
        </Text>
        <Text size='sm'>
          {description}
        </Text>
      </TextContent>
    </Wrapper>
  )
}

export default Alert
