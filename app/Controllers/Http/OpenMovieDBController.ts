import axios from 'axios'
import Env from '@ioc:Adonis/Core/Env'
import { MovieFromOMDB } from 'Contracts/types'

const OMDB_API_URL = 'http://www.omdbapi.com/'
const OMDB_API_KEY = Env.get('OMDB_API_KEY')

const searchByTitle = async (title: string) => {
  const query = `${OMDB_API_URL}?s=${title}&apikey=${OMDB_API_KEY}`
  try {
    let response = await axios.get(query)
    return response.data.Search.filter((m: MovieFromOMDB) => m.Type !== 'game')
  } catch (error) {
    console.log(error.response.data.Error)
  }
}

const searchByID = async (id: string) => {
  const query = `${OMDB_API_URL}?i=${id}&apikey=${OMDB_API_KEY}`
  try {
    let response = await axios.get(query)
    return response.data
  } catch (error) {
    console.log(error.response.data.Error)
  }
}

export default class OpenMovieDBController {
  public async searchByTitle({ params }) {
    const movies = await searchByTitle(params.title)
    return movies
  }

  public async searchByID({ params }) {
    const movies = await searchByID(params.id)
    return movies
  }
}
