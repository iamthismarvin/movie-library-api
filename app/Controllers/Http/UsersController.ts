import User from 'App/Models/User'

export default class UsersController {
  public async index() {
    const users = await User.all()
    return users
  }

  public async show({ params }) {
    const user = await User.findOrFail(params.id)
    return user
  }

  public async store({ request }) {
    await User.create({
      username: request.input('username'),
      password: request.input('password'),
    })
  }

  public async destroy({ params }) {
    const user = await User.findOrFail(params.id)
    user.delete()
  }
}
