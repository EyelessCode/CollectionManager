import { type MusicItem } from "@src/@types/data/type"
import { getCollection } from "@src/utils/predicate"

export const musicCollection=getCollection<MusicItem>("Músicas")
export const musicData:MusicItem[]|undefined=musicCollection?.items.map((item)=>({
  id:item.id,
  coverPhoto:item.coverPhoto,
  title:item.title,
  album:item.album,
  gender:item.gender,
  format:item.format,
}))
