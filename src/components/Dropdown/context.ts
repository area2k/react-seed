import { createContext, Dispatch, SetStateAction, useContext } from 'react'

export type DropdownContextShape = {
  id: string
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const DropdownContext = createContext<DropdownContextShape>({
  id: '', isOpen: false, setIsOpen: () => undefined
})

export default () => useContext(DropdownContext)
