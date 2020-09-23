import { Movie, Crew } from '@/types'

export const stringToSlug = (str: string): string => {
  str = str.replace(/^\s+|\s+$/g, '')
  str = str.toLowerCase()

  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
  const to = 'aaaaeeeeiiiioooouuuunc------'
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

  return str
}

export const convertMovieObjectFromDB = (objFromDB: any): Movie => {
  const heroPath = objFromDB.backdrop_path
    ? objFromDB.backdrop_path
    : objFromDB.poster_path
  return {
    id: objFromDB.id,
    slug: stringToSlug(objFromDB.title),
    imgPoster: 'https://image.tmdb.org/t/p/w185/' + objFromDB.poster_path,
    imgHero: 'https://image.tmdb.org/t/p/original/' + heroPath,
    imgHeroCard: 'https://image.tmdb.org/t/p/w500/' + heroPath,
    title: objFromDB.title,
    releaseDate: new Date(objFromDB.release_date),
    synopsis: objFromDB.overview,
    wishlist: false,
    directors: [],
  }
}

export const convertCreditsObjectFromDB = (objFromDB: any): Crew => {
  return {
    id: objFromDB.credit_id,
    job: objFromDB.job,
    name: objFromDB.name,
  }
}
