import { addFavoriteItem, musicCollection, type FavoriteItem, type MusicItem } from "@src/index";

export const favorites:FavoriteItem[]=[]
const music=musicCollection?.items.at(2)
addFavoriteItem<MusicItem>({
  category:musicCollection?.category,
  title:music?.title,
  id:music?.id,
  coverPhoto:music?.coverPhoto,
  item:music
})

/*
! Tengo que refinarlo, no está en el Dashboard y parece algo sensible.
* Nuevo archivo: `addFavorites`,
* Archivo `type` se agregó una nueva `interface`,
* Archivo `musics` se limitó a las 1ros 6 músicas (esto es para favoritos,
*   no para músicas en sí).
*/
