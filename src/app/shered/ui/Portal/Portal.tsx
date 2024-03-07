import { ReactNode } from "react"
import { createPortal } from "react-dom"


interface propsPortal {
  children: ReactNode,
  element?: HTMLElement
}


export const Portal = (props: propsPortal) => {
  const {
    children,
    element=document.body
  } = props

  return createPortal(children, element)
}