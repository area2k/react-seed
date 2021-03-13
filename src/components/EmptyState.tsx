import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import styled from '@/styles'

import Icon from '@/elements/Icon'
import Text from '@/elements/Text'

import Stack from '@/components/Stack'
import { Body, Subheading } from '@/components/Typography'

const Wrapper = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: '32px 0'
})

export type Props = {
  icon?: IconDefinition
  text: string
  title?: string
}

const EmptyState = ({ icon = faQuestionCircle, text, title }: Props) => {
  return (
    <Wrapper>
      <Stack vertical align='center' gap={16} justify='center'>
        <Text size='xxxl'>
          <Icon fixedWidth icon={icon} />
        </Text>
        <div style={{ textAlign: 'center' }}>
          {title &&
            <Subheading>{title}</Subheading>
          }
          <Body color='light'>{text}</Body>
        </div>
      </Stack>
    </Wrapper>
  )
}

EmptyState.Wrapper = Wrapper
Wrapper.displayName = 'stitches(EmptyState.Wrapper)'

export default EmptyState
