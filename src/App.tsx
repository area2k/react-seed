import Button from '@/elements/Button'
import Input from '@/elements/Input'
import Text from '@/elements/Text'

import Footer from '@/components/Footer'
import MainLayout from '@/components/MainLayout'
import Sidebar, { Group } from '@/components/Sidebar'

const sharedStyles = { display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }

const App = () => {
  return (
    <MainLayout
      Footer={<Footer />}
      Navbar={<div style={{ ...sharedStyles, backgroundColor: 'darkgrey' }}>Navbar</div>}
      Sidebar={
        <Sidebar>
          <Group title='Something here'>
          </Group>
        </Sidebar>
      }
    >
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
        <div style={{ display: 'flex', flex: 1, gap: '2rem', flexWrap: 'wrap' }}>
          <Button color='primary'>
            Continue
          </Button>
          <Button color='basic'>
            Continue
          </Button>
          <Button color='success'>
            Continue
          </Button>
          <Button color='danger'>
            Continue
          </Button>
        </div>
        <div style={{ display: 'flex', flex: 1, gap: '2rem', flexWrap: 'wrap' }}>
          <Button disabled color='primary'>
            Continue
          </Button>
          <Button disabled color='basic'>
            Continue
          </Button>
          <Button disabled color='success'>
            Continue
          </Button>
          <Button disabled color='danger'>
            Continue
          </Button>
        </div>
        <div style={{ display: 'flex', flex: 1, gap: '2rem', flexWrap: 'wrap' }}>
          <Button appearance='outline' color='primary'>
            Continue
          </Button>
          <Button appearance='outline' color='basic'>
            Continue
          </Button>
          <Button appearance='outline' color='success'>
            Continue
          </Button>
          <Button appearance='outline' color='danger'>
            Continue
          </Button>
        </div>
        <div style={{ display: 'flex', flex: 1, gap: '2rem', flexWrap: 'wrap' }}>
          <Button disabled appearance='outline' color='primary'>
            Continue
          </Button>
          <Button disabled appearance='outline' color='basic'>
            Continue
          </Button>
          <Button disabled appearance='outline' color='success'>
            Continue
          </Button>
          <Button disabled appearance='outline' color='danger'>
            Continue
          </Button>
        </div>
        <div style={{ display: 'flex', flex: 1, gap: '2rem', flexWrap: 'wrap' }}>
          <Text>
            Something here that is textual
          </Text>
          <Text color='hint' size='sm'>
            Something here that is textual
          </Text>
          <Text size='xxl' weight='bold'>
            Something here that is textual
          </Text>
        </div>
        <div style={{ display: 'flex', flex: 1, gap: '2rem', flexWrap: 'wrap' }}>
          <Input placeholder='Type something here...' />
          <Input placeholder='Type something here...' size='l' status='danger' />
          <Input placeholder='Type something here...' size='xl' status='warning' />
        </div>
        <Sidebar>
        </Sidebar>
      </div>
    </MainLayout>
  )
}

export default App
