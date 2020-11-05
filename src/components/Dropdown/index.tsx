import { FC, useState } from 'react'

import styled from '@/styles'

import Content from './Content'
import Trigger from './Trigger'

import { DropdownContext } from './context'

const Wrapper = styled('div', {
  display: 'inline-block',

  position: 'relative'
})

Wrapper.displayName = 'Dropdown-Wrapper'

type Props = {
  isInitiallyOpen?: boolean
  id: string
}

const Dropdown: FC<Props> = ({ children, id, isInitiallyOpen = false }) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen)

  return (
    <DropdownContext.Provider value={{ id, isOpen, setIsOpen }}>
      <Wrapper>
        {children}
      </Wrapper>
    </DropdownContext.Provider>
  )
}

export { Content, Trigger }
export default Dropdown
