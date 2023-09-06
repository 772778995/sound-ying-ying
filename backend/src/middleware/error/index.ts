import { Middleware } from 'koa'
import { systemLogger } from '@/logs/logger'
import { HttpCode } from 'can-can-word-bug'

const errorMiddleware: Middleware = async (ctx, next) => {
	try {
		await next()
	} catch (_err: unknown) {
		const err = _err as Error
		const errMsg = err.message || JSON.stringify(err)
		systemLogger().error(`${ctx.ip} - - "${ctx.method} ${ctx.path}" ${errMsg}`)
		return ctx.return.error({ code: HttpCode.INTERNAL_SERVER_ERROR, msg: errMsg })
	}
}

export default errorMiddleware
