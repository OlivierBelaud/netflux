import { ActionTree, MutationTree } from 'vuex'
import { Movie } from '@/types'
import { convertMovieObjectFromDB } from '@/utils'
import MovieDBApi from '@/http/http-requests-moviedb'

export const state = () => ({
  list: [] as Movie[],
  count: 0,
  pages: 0,
  wishlistIds: [] as number[],
  wishlist: [] as Movie[],
})

export type MoviesState = ReturnType<typeof state>

export const mutations: MutationTree<MoviesState> = {
  UPDATE_LIST: (state, list: Array<Movie>) => (state.list = list),
  UPDATE_COUNT: (state, count: number) => (state.count = count),
  UPDATE_PAGES: (state, pages: number) => (state.pages = pages),
  ADD_WISH_LIST: (state, movieId: number) => {
    state.wishlistIds = [...state.wishlistIds, movieId]
    const movieToAdd = state.list.find((movie) => movie.id === movieId)
    if (movieToAdd) {
      state.wishlist = [...state.wishlist, movieToAdd]
    }
  },
  REMOVE_WISH_LIST: (state, movieId: number) => {
    state.wishlistIds = state.wishlistIds.filter((wish) => wish !== movieId)
    state.wishlist = state.wishlist.filter((wish) => wish.id !== movieId)
  },
}

export const actions: ActionTree<MoviesState, MoviesState> = {
  async fetchMovies({ commit }, page: number) {
    const instance = new MovieDBApi()

    const resultsAPI = await instance.getMovies(page)

    const list = resultsAPI.results.map((result: any) =>
      convertMovieObjectFromDB(result)
    )

    commit('UPDATE_LIST', list)
    commit('UPDATE_COUNT', resultsAPI.total_results)
    commit('UPDATE_PAGES', resultsAPI.total_pages)
  },
}
