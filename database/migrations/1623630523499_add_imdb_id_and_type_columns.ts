import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Movies extends BaseSchema {
  protected tableName = 'movies'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.text('imdb_id').unique().notNullable()
      table.text('type').notNullable()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumns('imdb_id', 'type')
    })
  }
}
