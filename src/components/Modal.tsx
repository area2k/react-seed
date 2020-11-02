import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { ComponentProps, FC } from 'react'

import styled from '@/styles'

import useClickout from '@/hooks/useClickout'
import useDisableBodyScroll from '@/hooks/useDisableBodyScroll'

import Card, { Heading } from '@/elements/Card'
import Icon from '@/elements/Icon'
import Overlay from '@/elements/Overlay'
import Text from '@/elements/Text'

import SingleColumnLayout from '@/components/SingleColumnLayout'
import IconicButton from '@/elements/IconicButton'

const Wrapper = styled('div', {
  padding: '10vh 0'
})

type Props = {
  size?: ComponentProps<typeof SingleColumnLayout>['size']
  title: string,
  onRequestClose: () => void
}

const Modal: FC<Props> = ({ children, size = 'md', title, onRequestClose }) => {
  useDisableBodyScroll()

  const clickoutRef = useClickout<HTMLDivElement>(onRequestClose)

  return (
    <Overlay>
      <SingleColumnLayout size={size}>
        <Wrapper>
          <Card ref={clickoutRef} css={{ boxShadow: '$2' }}>
            <Heading>
              <Text size='lg' weight='medium'>
                {title}
              </Text>
              <IconicButton size='sm' onClick={onRequestClose}>
                <Icon fixedWidth icon={faTimes} />
              </IconicButton>
            </Heading>
            {children}
          </Card>
        </Wrapper>
      </SingleColumnLayout>
    </Overlay>
  )
}

export default Modal
