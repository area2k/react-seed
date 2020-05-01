import useModal from '@area2k/use-modal'
import React from 'react'

import Banner from '@/widgets/Banner'
import Content from '@/widgets/Content'
import Tab from '@/widgets/Tab'
import Overlay from '@/widgets/Overlay'
import Modal from '@/widgets/Modal'
import Button from '@/components/Button'

interface ModalProps {
  name?: string
  hideModal: () => void
}

const TestModal = ({ name = 'World', hideModal }: ModalProps) => (
  <Overlay>
    <Modal title='Testing modal' onClose={hideModal}>
      Hello, {name}!
    </Modal>
  </Overlay>
)

const Home = () => {
  const [showModal, hideModal] = useModal(({ name }: Partial<ModalProps>) => (
    <TestModal name={name} hideModal={hideModal} />
  ))

  return (
    <>
      <Banner
        actions={
          <>
            <Button onClick={() => showModal({ name: 'Andrew' })}>
              Show modal
            </Button>
          </>
        }
        tabs={
          <>
            <Tab
              icon={{ iconName: 'icons-alt', prefix: 'far' }}
              title='Testing'
              to={{ pathname: '/testing' }}
            />
          </>
        }
        titleText='Home page'
      />
      <Content>
      </Content>
    </>
  )
}

export default Home
