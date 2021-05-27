import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { Info, Format } from 'Contracts/types'

export default class Movie extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public purchasedAt: Date

  @column()
  public libraryID: string

  @column()
  public notes: string

  @column()
  public info: Info

  @column()
  public format: Format
}
