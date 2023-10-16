import { Middleware } from 'koa'

export const getAllAudio: Middleware = async ctx => {
	ctx.return([1, 2, 3])
}
