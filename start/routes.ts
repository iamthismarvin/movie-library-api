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
import { MovieFactory, UserFactory } from 'Database/factories'

// General
Route.get('/', () => {
  return 'Movie Library API by Marvin Parada. (https://marvin.dev)'
})

// Users
Route.group(() => {
  Route.get('/', 'UsersController.index')
  Route.post('/', 'UsersController.store')
  Route.get('/:id', 'UsersController.show')
  Route.delete('/:id', 'UsersController.destroy')
}).prefix('/users')

// Movies
Route.group(() => {
  Route.get('/', 'MoviesController.index')
  Route.post('/', 'MoviesController.store')
  Route.get('/:id', 'MoviesController.show')
  Route.delete('/:id', 'MoviesController.destroy')
}).prefix('/movies')

// Factories
Route.group(() => {
  Route.post('/single-user', async () => {
    UserFactory.create()
  })
  Route.post('/single-movie', async () => {
    MovieFactory.create()
  })
}).prefix('/factories')
