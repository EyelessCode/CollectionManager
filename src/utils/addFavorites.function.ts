import { favorites, type FavoriteItem } from "@src/index"

export function addFavoriteItem<T>(item:FavoriteItem){
  if(!favorites.some((fav)=>fav.id===item.id&&fav.category===item.category)){
    favorites.push(item) as T
  }
}
