import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Movies extends BaseSchema {
  protected tableName = 'movies'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.text('purchase_location').nullable()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('purchase_location')
    })
  }
}
