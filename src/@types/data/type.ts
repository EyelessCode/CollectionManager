import { Format } from '@src/index';
export interface Collection<T> {
  id: number;
  category: string;
  items: T[];
}

export interface FavoriteItem{
  id?:number|undefined
  category:string|string[]|undefined
  title:string|string[]|undefined
  coverPhoto?:string|undefined
  item?:object
}

export interface Accesor<T>{
  header:string
  accesor:keyof T
}

export interface MusicItem {
  id?: number;
  title: string|string[];
  album: string;
  releaseDate?: string;
  gender:string|string[]
  durationSec?:number|string
  coverPhoto:string

  compositor?:string|string[]
  discographfy?:string
  format?:typeof Format
  numPista?:number
  language?:string
}

export interface GameItem {
  id?: number;
  name: string;
  description: string;
  image: string;
}

export interface MovieItem {
  id?: number;
  name: string;
  description: string;
  image: string;
}
