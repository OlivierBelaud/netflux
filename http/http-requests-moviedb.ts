import { convertMovieObjectFromDB, convertCreditsObjectFromDB } from '@/utils'
import { Movie, Crew } from '@/types'
import HttpClient from './http-client'

export default class MovieDBApi extends HttpClient {
  public constructor() {
    super('https://api.themoviedb.org/3/')
  }

  private apiKey = '2de8382bafd0e08c70782e50e18c8352'

  public getMovies = (page: number) =>
    this.instance.get<any>(
      `discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=vote_count.desc&include_adult=false&page=${page}&with_genres=16&without_genres=99`
    )

  public getMovie = (id: number) =>
    this.instance.get<Movie>(
      `movie/${id}?api_key=${this.apiKey}&language=fr-FR`
    )

  public getCredits = (id: number) =>
    this.instance.get<any>(`movie/${id}/credits?api_key=${this.apiKey}`)

  public getMovieDetails = async (id: number) => {
    const resultAPI = await this.getMovie(id)
    const movie = convertMovieObjectFromDB(resultAPI)

    const resultCredits = await this.getCredits(movie.id)
    const directors = resultCredits.crew
      .map((result: any) => convertCreditsObjectFromDB(result))
      .filter((crew: Crew) => crew.job === 'Director')
    movie.directors = directors

    return movie
  }
}
