import React from 'react'

import Banner from '@/widgets/Banner'
import Content from '@/widgets/Content'
import Tab from '@/widgets/Tab'

const Home = () => {
  return (
    <>
      <Banner
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
