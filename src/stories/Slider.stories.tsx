import { Story, Meta } from '@storybook/react'
import { useState } from 'react'

import Card from '@/components/Card'
import SliderComponent, { RangeSliderProps, ValueSliderProps } from '@/components/Slider'

type ValueProps = Omit<ValueSliderProps, 'value' | 'onChange'>

export const ValueSlider: Story<ValueProps> = ({ ...props }) => {
  const [value, setValue] = useState(3)

  return (
    <SliderComponent.Value
      {...props}
      value={value}
      onChange={setValue}
    />
  )
}
ValueSlider.args = {
  ariaLabel: 'Value slider',
  ariaValueText: ({ value }) => `Value: ${value}`,
  id: 'value-slider',
  min: 0,
  max: 9,
  step: 1
}

type RangeProps = Omit<RangeSliderProps, 'value' | 'onChange'>

export const RangeSlider: Story<RangeProps> = ({ ...props }) => {
  const [value, setValue] = useState([3, 6])

  return (
    <SliderComponent.Range
      {...props}
      value={value}
      onChange={setValue}
    />
  )
}
RangeSlider.args = {
  ariaLabel: 'Range slider',
  ariaValueText: ({ valueNow }) => `Value: ${valueNow}`,
  id: 'range-slider',
  min: 0,
  max: 9,
  step: 1
}

export default {
  title: 'Components/Slider',
  argTypes: {
    marks: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    disabled: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    ariaLabel: {
      control: {
        type: 'text'
      }
    },
    id: {
      control: {
        type: 'text'
      }
    },
    min: {
      control: false
    },
    max: {
      control: false
    },
    step: {
      control: false
    },
    ariaValueText: {
      table: {
        disable: true
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px' }}>
        <div style={{ flex: '0 1 100%', maxWidth: '768px' }}>
          <Card sectioned title='Slider'>
            {Story()}
          </Card>
        </div>
      </div>
    )
  ],
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta
