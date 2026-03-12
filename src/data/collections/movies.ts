import { type MovieItem } from '@src/index';
import { getCollection } from '../../utils/getCollection.function';

export const movieCollection=getCollection<MovieItem>("Películas")
export const movieData:MovieItem[]|undefined=movieCollection?.items.map((item)=>({
  id:item.id,
  name:item.name,
  description:item.description,
  image:item.image,
}))
