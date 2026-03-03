import type { ReactNode } from "react"

interface Props{
  children:ReactNode
}

const Footer = ({children}:Props) => {
  return (
    <section>{children}</section>
  )
}

export default Footer
