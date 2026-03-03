import type { Collection } from "@src/@types/data/type";
import { collection } from "@src/data/data";

export function getCollection<T>(category:string):Collection<T>|undefined{
  return collection.find((item)=>item.category===category) as Collection<T>
}
