import { type Collection } from "@src/index";
import { collection } from '../data/data';

export function getCollection<T>(category:string):Collection<T>|undefined{
  return collection.find((item)=>item.category===category) as Collection<T>
}
