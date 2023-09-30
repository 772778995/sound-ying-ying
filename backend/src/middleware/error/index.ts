import { Middleware } from 'koa'
import { systemLogger } from '@/logs/logger'
import { HttpCode } from 'can-can-word-bug'
import { QueryFailedError } from 'typeorm'
import { ValidateError } from '@/db/saveData'
import { Done } from '../done'

const errorMiddleware: Middleware = async (ctx, next) => {
	try {
		await next()
	} catch (_err: unknown) {
		const err = _err as Error & { code: string }
		if (err instanceof Done) return
		const errMsg = err.message || JSON.stringify(err)
		const errType = err instanceof QueryFailedError ? '数据库异常' : '未知异常'
		let code = HttpCode.INTERNAL_SERVER_ERROR

		if (err instanceof ValidateError) {
			code = HttpCode.BAD_REQUEST
		} else {
			systemLogger().error(`${errType} ${ctx.ip} - - "${ctx.method} ${ctx.path}" ${errMsg}`)
		}

		return ctx.return.error({ code, msg: errMsg })
	}
}

export default errorMiddleware
