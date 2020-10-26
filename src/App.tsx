import React from 'react'

import Button, { OutlineButton } from '@/elements/Button'
import MainLayout from '@/elements/MainLayout'
import Text from '@/elements/Text'

import Footer from '@/components/Footer'

const sharedStyles = { display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }

const App = () => {
  return (
    <MainLayout>
      <nav style={{ ...sharedStyles, backgroundColor: 'red', gridArea: 'navbar' }}>
        Navbar
      </nav>
      {/* <aside style={{ ...sharedStyles, backgroundColor: 'blue', gridArea: 'sidebar' }}>
        Sidebar
      </aside> */}
      <section style={{ gridArea: 'content', padding: '2rem' }}>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', flex: 1, gap: '2rem', flexWrap: 'wrap' }}>
            <Button color='primary'>
              Hello world!
            </Button>
            <Button color='basic'>
              Hello world!
            </Button>
            <Button color='warn'>
              Hello world!
            </Button>
            <Button color='danger'>
              Hello world!
            </Button>
            <Button color='success'>
              Hello world!
            </Button>
          </div>
          <div style={{ display: 'flex', flex: 1, gap: '2rem', flexWrap: 'wrap' }}>
            <Button disabled color='primary'>
              Hello world!
            </Button>
            <Button disabled color='basic'>
              Hello world!
            </Button>
            <Button disabled color='warn'>
              Hello world!
            </Button>
            <Button disabled color='danger'>
              Hello world!
            </Button>
            <Button disabled color='success'>
              Hello world!
            </Button>
          </div>
          <div style={{ display: 'flex', flex: 1, gap: '2rem', flexWrap: 'wrap' }}>
            <OutlineButton appearance='outline' color='primary'>
              Hello world!
            </OutlineButton>
            <OutlineButton appearance='outline' color='basic'>
              Hello world!
            </OutlineButton>
            <OutlineButton appearance='outline' color='warn'>
              Hello world!
            </OutlineButton>
            <OutlineButton appearance='outline' color='danger'>
              Hello world!
            </OutlineButton>
            <OutlineButton appearance='outline' color='success'>
              Hello world!
            </OutlineButton>
          </div>
          <div style={{ display: 'flex', flex: 1, gap: '2rem', flexWrap: 'wrap' }}>
            <OutlineButton disabled appearance='outline' color='primary'>
              Hello world!
            </OutlineButton>
            <OutlineButton disabled appearance='outline' color='basic'>
              Hello world!
            </OutlineButton>
            <OutlineButton disabled appearance='outline' color='warn'>
              Hello world!
            </OutlineButton>
            <OutlineButton disabled appearance='outline' color='danger'>
              Hello world!
            </OutlineButton>
            <OutlineButton disabled appearance='outline' color='success'>
              Hello world!
            </OutlineButton>
          </div>
          <div style={{ display: 'flex', flex: 1, gap: '2rem', flexWrap: 'wrap' }}>
            <Text>
              Something here that is textual
            </Text>
            <Text color='hint' size='s'>
              Something here that is textual
            </Text>
            <Text color='primary' size='xxl' weight='bold'>
              Something here that is textual
            </Text>
          </div>
        </div>
      </section>
      <Footer />
    </MainLayout>
  )
}

export default App
