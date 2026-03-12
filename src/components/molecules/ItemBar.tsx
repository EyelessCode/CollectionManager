import { Link } from "@tanstack/react-router"

interface Props{
  name:string
  link:string
}

const ItemBar = ({link,name}:Props) => {
  return (
    <li>
      <Link 
        to={link} 
        className="block px-4 py-2 rounded bg-cyan-100 text-cyan-900
          font-medium hover:text-white hover:bg-cyan-700 transition-all
          text-lg large-tablet:text-xl pc-ultra:text-3xl">
        {name}
      </Link>
    </li>
  )
}

export default ItemBar
