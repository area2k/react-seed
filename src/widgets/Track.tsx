import React from 'react'
import styled from 'styled-components'

import { grey600, grey800 } from '@/theme/colors'

import Flex from '@/components/Flex'
import Icon from '@/components/Icon'
import Text from '@/components/Text'

const StepIcon = styled(Icon)`
  height: 1rem;
  margin-top: 0.875rem;
  width: 1rem !important;

  color: ${p => p.theme[p.color]};
`

const StepNumber = styled(Text)`
  width: 1rem;

  text-align: center;
`

const Step = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0.5rem 0.125rem;

  border-radius: 0.25rem;

  position: relative;

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: calc(100% - 32px);

    bottom: 15px;
    left: 24px;
    position: absolute;

    background-color: ${p => p.isCompleted ? p.theme[p.completedColor] : p.theme.grey400};
  }
`

const FinalStep = styled.div`
  padding-bottom: 0.5rem;
`

const Wrapper = styled.div`
  align-items: flex-end;
  display: flex;
  width: 100%;

  position: relative;
`

interface Step {
  icon: string
  title: string
}

interface Props {
  activeColor?: string
  activeStep: number
  completedColor?: string
  steps: Step[]
}

const Track = ({
  activeColor, activeStep, completedColor = grey800, steps
}: Props) => {
  activeColor = activeColor || completedColor

  const isTrackComplete = activeStep === steps.length

  return (
    <Wrapper>
      {steps.map((step, index) => {
        const isCompleted = index < activeStep
        const isActive = index === activeStep

        return (
          <Step
            key={index}
            completedColor={completedColor}
            isCompleted={isCompleted}
          >
            <Flex>
              <StepNumber
                uppercase
                color={isActive ? activeColor : grey600}
                size={0.875}
                weight={600}
              >
                {`0${index + 1}`.slice(-2)}
              </StepNumber>
              <Text
                uppercase
                color={isActive ? activeColor : grey600}
                size={0.875}
                weight={600}
              >
                {step.title}
              </Text>
            </Flex>
            <StepIcon
              color={isActive ? activeColor : (isCompleted ? completedColor : grey600)}
              name={step.icon}
              prefix='far'
            />
          </Step>
        )
      })}
      <FinalStep>
        <StepIcon
          color={isTrackComplete ? completedColor : grey600}
          name='check-circle'
          prefix={isTrackComplete ? 'fas' : 'far'}
        />
      </FinalStep>
    </Wrapper>
  )
}

export default Track
