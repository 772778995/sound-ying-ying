import { Middleware } from 'koa'

export class Done extends Error {
  constructor() {
    super()
  }
}

const doneMiddleware: Middleware = async (ctx, next) => {
  ctx.done = () => {
    throw new Done()
  }
  await next()
}

export default doneMiddleware
