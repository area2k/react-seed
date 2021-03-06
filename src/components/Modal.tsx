import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { ComponentProps, FC } from 'react'

import useClickout from '@/hooks/useClickout'
import useDisableBodyScroll from '@/hooks/useDisableBodyScroll'

import Overlay from '@/elements/Overlay'

import Card from '@/components/Card'
import IconicButton from '@/components/IconicButton'
import SingleColumnLayout from '@/components/SingleColumnLayout'

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
      <div style={{ padding: '72px 16px' }}>
        <SingleColumnLayout size={size}>
          <Card
            ref={clickoutRef}
            css={{ boxShadow: '$2' }}
          >
            <Card.Header title={title}>
              <IconicButton
                appearance='clear'
                icon={faTimes}
                size='sm'
                onClick={onRequestClose}
              />
            </Card.Header>
            {children}
          </Card>
        </SingleColumnLayout>
      </div>
    </Overlay>
  )
}

export default Modal
