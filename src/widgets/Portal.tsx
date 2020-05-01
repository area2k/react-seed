import { ReactNode } from 'react'
import ReactDOM from 'react-dom'

interface Props {
  children: ReactNode
  target?: HTMLElement
}

const Portal = ({ children, target = document.body }: Props) => (
  ReactDOM.createPortal(children, target)
)

export default Portal
