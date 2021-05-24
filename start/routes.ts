/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import { UserFactory } from 'Database/factories'

Route.get('/', 'UsersController.index')
Route.get('/create-user', async () => {
  UserFactory.create()
})
Route.get('/user/:id', 'UsersController.show')
Route.post('/register', 'UsersController.register')
