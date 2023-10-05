import { Middleware } from 'koa'
import { systemLogger } from '@/logs/logger'
import { HttpCode } from 'can-can-word-bug'
import { QueryFailedError } from 'typeorm'
import { ValidateError } from '@/db/saveData'
import { Done } from '../done'
import whiteApis from '@/api/white-apis'
import { Urls } from '@/typings/apis'

const errorMiddleware: Middleware = async (ctx, next) => {
	try {
		await next()
	} catch (_err: unknown) {
		const err = _err as Error & { code: string }

		/** 结束请求 */
		if (err instanceof Done) return

		/** 未授权 */
		if (err.name === 'UnauthorizedError') {
			// 路由白名单不需要授权
			if (whiteApis.includes(ctx.url.replace('/api', '') as Urls['all'])) return

			try {
				ctx.return.error({
					code: HttpCode.UNAUTHORIZED,
					msg: ctx.i18n.__('Please log in before proceeding')
				})
			} catch (err) {}
			return
		}

		const errMsg = err.message || JSON.stringify(err)
		const errType = err instanceof QueryFailedError ? '数据库异常' : '未知异常'
		let code = HttpCode.INTERNAL_SERVER_ERROR

		if (err instanceof ValidateError) {
			code = HttpCode.BAD_REQUEST
		} else {
			systemLogger().error(`${errType} ${ctx.ip} - - "${ctx.method} ${ctx.path}" ${errMsg}`)
		}
		try {
			ctx.return.error({ code, msg: errMsg })
		} catch (err) {}
	}
}

export default errorMiddleware
