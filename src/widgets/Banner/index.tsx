import React, { ReactElement } from 'react'
import styled from 'styled-components'

import Content from '@/widgets/Content'
import PageHeader from '@/widgets/PageHeader'

const Wrapper = styled.div`
  margin-bottom: 2.5rem;

  background-color: ${p => p.theme[p.bgColor]};
  border-bottom: 1px solid ${p => p.theme[p.borderColor]};
`

const TabsWrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 0 -1.5rem -1px;
`

const TrackWrapper = styled.div`
  margin-bottom: 2.5rem;
`

interface Props {
  bgColor?: string
  borderColor?: string
  tabs?: ReactElement[]
  track?: ReactElement
}

const Banner = ({ bgColor = 'white', borderColor = 'grey200', tabs, track, ...rest }: Props) => (
  <Wrapper
    bgColor={bgColor}
    borderColor={borderColor}
  >
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
