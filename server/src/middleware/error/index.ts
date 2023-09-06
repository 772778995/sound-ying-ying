import { Middleware } from 'koa';
import { systemLogger } from '@/logs/logger'
import { HttpCode } from 'can-can-word-bug'

const errorMiddleware: Middleware = async (ctx, next) => {
	try {
		await next()
	} catch (err: any) {
		const errMsg = err.message || JSON.stringify(err)
		systemLogger().error(errMsg)
		return ctx.return.error({ code: HttpCode.INTERNAL_SERVER_ERROR, msg: errMsg })
	}
}

export default errorMiddleware