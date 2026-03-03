import type { ReactNode } from "react"

interface Props{
  children:ReactNode
  date:string
}

const Header = ({children,date}:Props) => {
  return (
    <section>
      {children}
      <article>{date}</article>
    </section>
  )
}

export default Header
