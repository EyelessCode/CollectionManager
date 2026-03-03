import ItemBar from "../molecules/ItemBar"

interface LinkProps{
  name:string
  link:string
}

const SideBar = () => {
  const names:LinkProps[]=[
    {name:"Mis colecciones",link:"/other"},
    {name:"Favoritos",link:"/other"}
  ]
  return (
    <section>
      <nav>
        <ul>
          {names.map((item)=><ItemBar link={item.link} name={item.name}/>)}
        </ul>
      </nav>
    </section>
  )
}

export default SideBar
