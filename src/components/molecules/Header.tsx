import type { ReactNode } from "react"

interface Props{
  children:ReactNode
  date:string
}

const Header = ({children,date}:Props) => {
  return (
    <>
      {children}
      <article><span className="underline italic text-base large-tablet::text-lg laptop:text-xl
      pc:text-2xl pc-ultra:text-3xl">
        {date}</span></article>
    </>
  )
}

export default Header
