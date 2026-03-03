import { Link } from "@tanstack/react-router"

interface Props{
  name:string
  link:string
}

const ItemBar = ({link,name}:Props) => {
  return (
    <Link to={link}><li>{name}</li></Link>
  )
}

export default ItemBar
