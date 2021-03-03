import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { ComponentProps, FC } from 'react'

import styled from '@/styles'

import useClickout from '@/hooks/useClickout'
import useDisableBodyScroll from '@/hooks/useDisableBodyScroll'

import Card, { Heading } from '@/elements/Card'
import Icon from '@/elements/Icon'
import Overlay from '@/elements/Overlay'

import IconicButton from '@/components/IconicButton'
import SingleColumnLayout from '@/components/SingleColumnLayout'
import { Subheading } from '@/components/Typography'

const Wrapper = styled('div', {
  padding: '15vh 0'
})

type Props = {
  disableClickout?: boolean
  size?: ComponentProps<typeof SingleColumnLayout>['size']
  title: string,
  onRequestClose: () => void
}

const Modal: FC<Props> = ({ children, disableClickout = false, size = 'md', title, onRequestClose }) => {
  useDisableBodyScroll()

  const clickoutRef = useClickout<HTMLDivElement>(onRequestClose, {
    debugName: `Modal(${title})`,
    isActive: !disableClickout
  })

  return (
    <Overlay aria-modal aria-label={title} role='dialog'>
      <SingleColumnLayout size={size}>
        <Wrapper>
          <Card ref={clickoutRef} css={{ boxShadow: '$2' }}>
            <Heading>
              <Subheading>
                {title}
              </Subheading>
              <IconicButton
                appearance='clear'
                icon={faTimes}
                size='sm'
                status='danger'
                onClick={onRequestClose}
              />
            </Heading>
            {children}
          </Card>
        </Wrapper>
      </SingleColumnLayout>
    </Overlay>
  )
}

export default Modal
