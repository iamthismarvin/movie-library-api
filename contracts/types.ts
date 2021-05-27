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
}

export interface Format {
  bluray_hd: boolean
  bluray_uhd: boolean
  dvd: boolean
  digital: boolean
}
