import React from 'react'

import Flex from '@/components/Flex'
import Footer from '@/components/Footer'
import Text from '@/components/Text'

// import Content from '@/widgets/Content'
// import Version from '@/widgets/Version'

const AppFooter = () => (
  <Footer>
    {/* <Content> */}
      <Flex justify='space-between'>
        <Text>
          &copy; 2020 Area2K
        </Text>
        {/* <Version /> */}
      </Flex>
    {/* </Content> */}
  </Footer>
)

export default AppFooter
