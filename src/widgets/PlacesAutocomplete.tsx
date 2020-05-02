import React from 'react'
import ReactPlacesAutocomplete from 'react-places-autocomplete'
import styled, { css } from 'styled-components'

import Icon from '@/components/Icon'
import Input from '@/components/Input'

const Wrapper = styled.div`
  position: relative;
`

const SuggestionList = styled.div`
  padding-top: 0.75rem;

  left: 0;
  position: absolute;
  right: 0;
  top: 2rem;

  background: white;
  border: 1px solid ${p => p.theme.primary700};
  border-radius: 0 0 ${p => p.theme.sizes.borderRadius}rem ${p => p.theme.sizes.borderRadius}rem;
  border-top: none;

  z-index: 500;
`

const activeStyles = css`
  background-color: ${p => p.theme.grey100};
`

const Suggestion = styled.div`
  padding: 0.75rem;

  border-top: 1px solid ${p => p.theme.grey200};
  cursor: pointer;

  font-size: 0.875rem;

  &:hover {
    background-color: ${p => p.theme.grey100};
  }

  &:last-child {
    border-radius: 0 0 ${p => p.theme.sizes.borderRadius}rem ${p => p.theme.sizes.borderRadius}rem;
  }

  ${p => p.active && activeStyles}
`

const Loading = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0.625rem;

  font-size: 0.875rem;

  ${Icon} {
    margin-right: 1rem;
  }
`

interface Props {
  placeholder?: string
  required?: boolean
}

const PlacesAutocomplete = React.forwardRef(({ placeholder, required, ...rest }: Props, ref) => (
  <ReactPlacesAutocomplete
    highlightFirstSuggestion
    {...rest}
  >
    {({ getInputProps, getSuggestionItemProps, loading, suggestions }) => (
      <Wrapper>
        <Input
          ref={ref}
          placeholder={placeholder}
          required={required}
          {...getInputProps()}
        />
        {(loading || suggestions.length > 0) &&
          <SuggestionList>
            {loading &&
              <Loading>
                <Icon spin icon='circle-notch' />
                Loading...
              </Loading>
            }
            {suggestions.map(suggestion => (
              <Suggestion
                active={suggestion.active}
                {...getSuggestionItemProps(suggestion)}
              >
                {suggestion.description}
              </Suggestion>
            ))}
          </SuggestionList>
        }
      </Wrapper>
    )}
  </ReactPlacesAutocomplete>
))

export default PlacesAutocomplete
