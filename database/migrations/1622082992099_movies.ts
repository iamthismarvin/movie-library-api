import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Movies extends BaseSchema {
  protected tableName = 'movies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.date('purchased_at').nullable()
      table.text('library_id').nullable()
      table.text('notes').nullable()
      table.jsonb('info').notNullable()
      table.jsonb('format').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
