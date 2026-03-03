import type { Accesor, GameItem, MovieItem, MusicItem } from "@src/index"

export const musicColumns:Accesor<MusicItem>[] = [
  {header:"ID",accesor:"id"},
  {header:"Portada",accesor:"coverPhoto"},
  {header:"Título",accesor:"title"},
  {header:"Género",accesor:"gender"},
  {header:"Formato",accesor:"format"},
]

export const videogameColumns:Accesor<GameItem>[] = [
  {header:"ID",accesor:"id"},
  {header:"Nombre",accesor:"name"},
  {header:"Descripción",accesor:"description"},
  {header:"Portada",accesor:"image"},
]

export const movieColumns:Accesor<MovieItem>[] = [
  {header:"ID",accesor:"id"},
  {header:"Nombre",accesor:"name"},
  {header:"Descripción",accesor:"description"},
  {header:"Portada",accesor:"image"},
]
