import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { Roles } from 'Contracts/types'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('username', 32).alter()
      table.text('password').alter()
      table.string('display_name', 32).nullable()
      table.enum('role', Object.values(Roles)).notNullable().defaultTo(Roles.USER)
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.string('username').alter()
      table.string('password').alter()
      table.dropColumns('display_name', 'role')
    })
  }
}
