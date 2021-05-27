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
  return {
    purchased_at: faker.date.past(),
    library_id: `M-${faker.datatype.number()}`,
    notes: faker.lorem.paragraph(),
    info: {
      title: faker.lorem.words(),
      year: faker.datatype.number(),
      genre: faker.datatype.array(),
      director: faker.datatype.array(),
      writer: faker.datatype.array(),
      actors: faker.datatype.array(),
      plot: faker.lorem.sentences(),
      cover: faker.image.imageUrl(),
    },
    format: {
      bluray_hd: faker.datatype.boolean(),
      bluray_uhd: faker.datatype.boolean(),
      dvd: faker.datatype.boolean(),
      digital: faker.datatype.boolean(),
    },
  }
}).build()
