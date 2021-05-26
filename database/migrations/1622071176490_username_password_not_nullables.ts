import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('username').unique().notNullable().alter()
      table.string('password').notNullable().alter()
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropUnique(['username'])
      table.string('username').alter()
      table.string('password').alter()
    })
  }
}
