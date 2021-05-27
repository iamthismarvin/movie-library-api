import Movie from 'App/Models/Movie'

export default class MoviesController {
  public async index() {
    const movies = await Movie.all()
    return movies
  }

  public async store({ request }) {
    await Movie.create({
      purchasedAt: request.input('purchased_at'),
      purchaseLocation: request.input('purchase_location'),
      libraryID: request.input('library_id'),
      notes: request.input('notes'),
      info: request.input('info'),
      format: request.input('format'),
    })
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
