import { type GameItem } from "@src/index";
import { getCollection } from '../../utils/getCollection.function';

export const videogameCollection=getCollection<GameItem>("Videojuegos")
export const gameData:GameItem[]|undefined=videogameCollection?.items.map((item)=>({
  id:item.id,
  name:item.name,
  description:item.description,
  image:item.image
}))
