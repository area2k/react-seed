import ReactSlider from 'react-slider'
import { useCallback } from 'react'

import styled from '@/styles'

import { Mark, ReactSliderState, Thumb, Track as BaseTrack, Wrapper } from './elements'

const Track = styled(BaseTrack, {
  '&.track-0': {
    backgroundImage: 'none',
    backgroundColor: '$$activeTrackColor',
    borderRadius: '$round 0 0 $round'
  },

  '&.track-1': {
    borderRadius: '0 $round $round 0'
  }
})

type SliderState = { index: number, value: number, valueNow: number }

export type Props = {
  ariaLabel: string
  ariaValueText: string | ((state: SliderState) => string)
  disabled?: boolean
  id: string
  marks?: boolean | number[] | number
  max: number
  min: number
  step?: number
  value: number
  onChange: (value: number) => void
}

const ValueSlider = ({ ariaValueText, marks = false, onChange, ...props }: Props) => {
  const getValueText = useCallback(({ value, ...state }: ReactSliderState) => {
    if (typeof ariaValueText === 'string') {
      return ariaValueText
    }

    if (typeof value === 'number') {
      return ariaValueText({ ...state, value })
    } else {
      return ariaValueText({ ...state, value: value[0] })
    }
  }, [ariaValueText])

  const handleChange = useCallback((value: number | number[] | null | undefined) => {
    if (typeof value === 'number') {
      return onChange(value)
    } else if (!!value && typeof value === 'object') {
      return onChange(value[0])
    }
  }, [onChange])

  return (
    <Wrapper>
      <ReactSlider
        step={1}
        {...props}
        ariaValuetext={getValueText}
        marks={marks}
        renderMark={({ as, css, ...p }) => <Mark {...p} active={Number(p.key) < props.value} />}
        renderThumb={({ as, css, ...p }) => <Thumb {...p} />}
        renderTrack={({ as, css, ...p }) => <Track {...p} />}
        onChange={handleChange}
      />
    </Wrapper>
  )
}

export default ValueSlider
