import Movie from 'App/Models/Movie'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class MoviesController {
  public async index() {
    const movies = await Movie.all()
    return movies
  }

  public async store({ request, response }) {
    const addToLibrarySchema = schema.create({
      purchased_at: schema.date.optional(),
      purchase_location: schema.string.optional(),
      library_id: schema.string.optional(),
      imdb_id: schema.string({}, [rules.unique({ table: 'movies', column: 'imdb_id' })]),
      type: schema.enum(['movie', 'series']),
      notes: schema.string.optional(),
      info: schema.object().members({
        title: schema.string(),
        year: schema.number(),
        genre: schema.array().members(schema.string()),
        director: schema.array().members(schema.string()),
        writer: schema.array().members(schema.string()),
        actors: schema.array().members(schema.string()),
        plot: schema.string(),
        cover: schema.string(),
        runtime: schema.string(),
      }),
      format: schema.object().members({
        bluray_hd: schema.boolean(),
        bluray_uhd: schema.boolean(),
        digital: schema.boolean(),
        dvd: schema.boolean(),
      }),
    })

    try {
      await request.validate({
        schema: addToLibrarySchema,
        messages: {
          'required': 'The {{ field }} is required.',
          'imdb_id.unique': '{{ field }} already exists in library.',
        },
      })
      await Movie.create({
        purchasedAt: request.input('purchased_at'),
        purchaseLocation: request.input('purchase_location'),
        libraryID: request.input('library_id'),
        imdbID: request.input('imdb_id'),
        type: request.input('type'),
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

  public async update({ request, response, params }) {
    const updateMovieSchema = schema.create({
      purchased_at: schema.date.optional(),
      purchase_location: schema.string.optional(),
      library_id: schema.string.optional(),
      imdb_id: schema.string(),
      type: schema.enum(['movie', 'series']),
      notes: schema.string.optional(),
      info: schema.object().members({
        title: schema.string(),
        year: schema.number(),
        genre: schema.array().members(schema.string()),
        director: schema.array().members(schema.string()),
        writer: schema.array().members(schema.string()),
        actors: schema.array().members(schema.string()),
        plot: schema.string(),
        cover: schema.string(),
        runtime: schema.string(),
      }),
      format: schema.object().members({
        bluray_hd: schema.boolean(),
        bluray_uhd: schema.boolean(),
        digital: schema.boolean(),
        dvd: schema.boolean(),
      }),
    })

    try {
      await request.validate({
        schema: updateMovieSchema,
        messages: {
          required: 'The {{ field }} is required.',
        },
      })
      const movie = await Movie.findOrFail(params.id)
      movie.purchasedAt = request.input('purchased_at')
      movie.purchaseLocation = request.input('purchase_location')
      movie.libraryID = request.input('library_id')
      movie.imdbID = request.input('imdb_id')
      movie.type = request.input('type')
      movie.notes = request.input('notes')
      movie.info = request.input('info')
      movie.format = request.input('format')
      movie.save()
    } catch (error) {
      response.badRequest(error.messages)
    }
  }

  public async destroy({ params }) {
    const movie = await Movie.findOrFail(params.id)
    movie.delete()
  }
}
