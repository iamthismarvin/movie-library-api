import Factory from '@ioc:Adonis/Lucid/Factory'
import Movie from 'App/Models/Movie'
import User from 'App/Models/User'

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    username: faker.lorem.word(),
    password: faker.lorem.word(),
  }
}).build()

export const MovieFactory = Factory.define(Movie, ({ faker }) => {
  const typeGenerator = () => {
    const type = ['movie', 'series']
    const max = 1
    return type[Math.floor(Math.random() * max)]
  }

  return {
    purchased_at: faker.date.past(),
    purchase_location: faker.lorem.word(),
    library_id: `M-${faker.datatype.number()}`,
    notes: faker.lorem.paragraph(),
    info: {
      title: faker.lorem.words(),
      year: faker.datatype.number(),
      genre: faker.datatype.array(3).map((genre) => genre.toString()),
      director: faker.datatype.array(2).map((genre) => genre.toString()),
      writer: faker.datatype.array(2).map((genre) => genre.toString()),
      actors: faker.datatype.array(4).map((genre) => genre.toString()),
      plot: faker.lorem.sentences(),
      cover: faker.image.imageUrl(),
      imdb_id: faker.lorem.word(),
      type: typeGenerator(),
    },
    format: {
      bluray_hd: faker.datatype.boolean(),
      bluray_uhd: faker.datatype.boolean(),
      dvd: faker.datatype.boolean(),
      digital: faker.datatype.boolean(),
    },
  }
}).build()
