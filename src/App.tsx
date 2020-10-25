import React from 'react'

import Button, { OutlineButton } from '@/elements/Button'

const App = () => {
  return (
    <div id='my-react-app'>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: '2rem', margin: '2rem' }}>
        <div style={{ display: 'flex', flex: 1, gap: '2rem' }}>
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
        <div style={{ display: 'flex', flex: 1, gap: '2rem' }}>
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
        <div style={{ display: 'flex', flex: 1, gap: '2rem' }}>
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
        <div style={{ display: 'flex', flex: 1, gap: '2rem' }}>
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
      </div>
    </div>
  )
}

export default App
