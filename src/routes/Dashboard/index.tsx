import useModal from '@area2k/use-modal'

import Button from '@/elements/Button'
import Card, { Body, Heading } from '@/elements/Card'
import Text from '@/elements/Text'

import Modal from '@/components/Modal'
import SingleColumnLayout from '@/components/SingleColumnLayout'

const Dashboard = () => {
  const [showModal, hideModal] = useModal(() => (
    <Modal title='Test modal' onRequestClose={hideModal}>
      <div style={{ padding: '2rem' }}>
        Test
      </div>
    </Modal>
  ))

  return (
    <>
      <div style={{ padding: '2rem' }}>
        <Text size='xxl' weight='semibold'>
          Dashboard
        </Text>
      </div>
      <SingleColumnLayout>
        <Card>
          <Heading>
            <Text size='lg' weight='medium'>
              Testing modals
            </Text>
          </Heading>
          <Body>
            <Button onClick={() => showModal()}>
              Open up
            </Button>
          </Body>
        </Card>
      </SingleColumnLayout>
    </>
  )
}

export default Dashboard
