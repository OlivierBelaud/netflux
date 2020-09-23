export interface Movie {
  id: number
  slug: string
  imgPoster: string
  imgHero: string
  imgHeroCard: string
  title: string
  releaseDate: Date
  synopsis: string
  wishlist: boolean
  directors: Array<Crew>
}

export interface Crew {
  id: number
  job: string
  name: string
}
