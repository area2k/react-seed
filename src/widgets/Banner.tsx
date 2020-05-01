import React from 'react'
import styled from 'styled-components'

import Content from '@/widgets/Content'
import PageHeader, { Props as PageHeaderProps } from '@/widgets/PageHeader'

import { grey200 } from '@/theme/colors'

const Wrapper = styled.div`
  margin-bottom: 2.5rem;

  background-color: white;
  border-bottom: 1px solid ${grey200};
`

const TabsWrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 0 -1.5rem -1px;
`

const TrackWrapper = styled.div`
  margin-bottom: 2.5rem;
`

interface Props
  extends PageHeaderProps {
  tabs?: React.ReactNode
  track?: React.ReactNode
}

const Banner = ({ tabs, track, ...rest }: Props) => (
  <Wrapper>
    <Content>
      <PageHeader {...rest} />
      {track &&
        <TrackWrapper>
          {track}
        </TrackWrapper>
      }
      {tabs &&
        <TabsWrapper>
          {tabs}
        </TabsWrapper>
      }
    </Content>
  </Wrapper>
)

export default Banner
