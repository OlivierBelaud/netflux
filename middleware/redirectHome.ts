import type { Context, Middleware } from '@nuxt/types'

const redirectHomeMiddleware: Middleware = (context: Context) => {
  context.redirect('/')
}

export default redirectHomeMiddleware
