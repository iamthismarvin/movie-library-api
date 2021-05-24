import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index(ctx: HttpContextContract) {
    const users = await User.all()
    return users
  }

  public async show(ctx: HttpContextContract) {
    const user = await User.find(ctx.params.id)
    return user
  }

  public async register({ request }) {
    const user = await User.create({
      username: request.input('username'),
      password: request.input('password'),
    })
    return user
  }
}
