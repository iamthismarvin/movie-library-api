import Movie from 'App/Models/Movie'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class MoviesController {
  public async index() {
    const movies = await Movie.all()
    return movies
  }

  public async store({ request, response }) {
    const addToLibrarySchema = schema.create({
      purchased_at: schema.date(),
      purchase_location: schema.string(),
      library_id: schema.string(),
      notes: schema.string(),
      info: schema.object().members({
        title: schema.string(),
        year: schema.number(),
        genre: schema.array().members(schema.string()),
        director: schema.array().members(schema.string()),
        writer: schema.array().members(schema.string()),
        actors: schema.array().members(schema.string()),
        plot: schema.string(),
        cover: schema.string(),
        imdb_id: schema.string({}, [rules.unique({ table: 'movies', column: 'imdb_id' })]), // MOVE TO PARENT SCOPE
        type: schema.enum(['movie', 'series']),
      }),
      format: schema.object().members({
        bluray_hd: schema.boolean(),
        bluray_uhd: schema.boolean(),
        digital: schema.boolean(),
        dvd: schema.boolean(),
      }),
    })

    try {
      await request.validate({ schema: addToLibrarySchema })
      await Movie.create({
        purchasedAt: request.input('purchased_at'),
        purchaseLocation: request.input('purchase_location'),
        libraryID: request.input('library_id'),
        notes: request.input('notes'),
        info: request.input('info'),
        format: request.input('format'),
      })
    } catch (error) {
      response.badRequest(error.messages)
    }
  }

  public async show({ params }) {
    const movie = await Movie.findOrFail(params.id)
    return movie
  }

  public async update() {}

  public async destroy({ params }) {
    const movie = await Movie.findOrFail(params.id)
    movie.delete()
  }
}
