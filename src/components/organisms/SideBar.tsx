import { Button, ItemBar } from "@src/index"
import { useState, type ReactNode } from "react"

interface Props{
  children:ReactNode
}
interface LinkProps{
  name:string
  link:string
}

const SideBar = ({children}:Props) => {
  const [open,setOpen]=useState(false)
  const toggleSidebar=():void=>setOpen(!open)

  const names:LinkProps[]=[
    {name:"Mis colecciones",link:"/other"},
    {name:"Favoritos",link:"/other"}
  ]
  return (
    <>
      <button
        type="button"
        className={`lg:hidden fixed left-0 top-1/8 z-2 bg-cyan-600 text-white px-3 py-2 rounded
        ${open?"translate-x-62.5":"translate-x-0"} transition-transform`}
        onClick={toggleSidebar}>
        {open ?
          <svg xmlns="http://www.w3.org/2000/svg" className="rotate-180" width="38" height="38"
            viewBox="0 0 24 24"><g fill="none"><path d="M4.75 12L3 13.563v-3.126z"/>
            <path stroke="currentColor" stroke-linecap="square" stroke-width="2"
            d="M21 19H3m18-7H10m11-7H3m1.75 7L3 13.563v-3.126z"/></g></svg> : 
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24">
            <g fill="none"><path d="M4.75 12L3 13.563v-3.126z"/><path stroke="currentColor"
            stroke-linecap="square" stroke-width="2" d="M21 19H3m18-7H10m11-7H3m1.75 7L3 13.563v-3.126z"/>
            </g></svg>
        }
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-1 lg:hidden overflow-hidden"
          onClick={toggleSidebar}/>
      )}
      <aside className={`fixed lg:static top-0 left-0 h-full lg:h-auto
          phone:w-64 pc-ultra:w-76 bg-cyan-200 p-4 border-r border-cyan-600 z-1
          transform transition-transform ${open ? "translate-x-0" :
          "-translate-x-full lg:translate-x-0"} overflow-hidden`}>
        {children}
        <section className="flex flex-col min-h-4/12 lg:min-h-4/5">
          <nav className="flex-1">
            <ul className="space-y-2">
              {names.map((item,index:number)=>
                <ItemBar key={index} link={item.link} name={item.name}/>
              )}
            </ul>
          </nav>
        </section>
        <section className="flex justify-center">
          <Button label="Cerrar sesión" type="button" size="base" variant="secondary-filled"/>
        </section>
      </aside>
    </>
  )
}

export default SideBar
