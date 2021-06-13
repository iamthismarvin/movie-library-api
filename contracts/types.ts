export enum Roles {
  ADMIN = 'admin',
  USER = 'user',
}

export interface Info {
  title: string
  year: number
  genre: string[]
  director: string[]
  writer: string[]
  actors: string[]
  plot: string
  cover: string
  imdb_id: string
  type: string
}

export interface Format {
  bluray_hd: boolean
  bluray_uhd: boolean
  dvd: boolean
  digital: boolean
}

export interface MovieFromOMDB {
  Title: string
  Year: string | number
  imdbID: string
  Type: string
  Poster: string
}
