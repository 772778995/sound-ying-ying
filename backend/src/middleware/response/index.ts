import { HttpCode } from 'can-can-word-bug'
import { Middleware } from 'koa'
import _ from 'lodash'

const responseMiddleware: Middleware = async (ctx, next) => {
	ctx.return = ((data: any, code = HttpCode.OK) => {
		ctx.body = { code, data }
	}) as any

	ctx.return.success = (response: any) => {
		if (_.isString(response)) response = { msg: ctx.i18n(response), type: 'success' }
		ctx.body = Object.assign({ code: HttpCode.OK, type: 'success' }, response)
	}
	ctx.return.warning = (response: any) => {
		if (_.isString(response)) response = { msg: ctx.i18n(response), type: 'warning' }
		ctx.body = Object.assign({ code: HttpCode.OK, type: 'warning' }, response)
	}
	ctx.return.info = (response: any) => {
		if (_.isString(response)) response = { msg: ctx.i18n(response), type: 'info' }
		ctx.body = Object.assign({ code: HttpCode.OK, type: 'info' }, response)
	}
	ctx.return.error = (response: any) => {
		if (_.isString(response)) {
			ctx.body = {
				code: HttpCode.BAD_REQUEST,
				msg: ctx.i18n(response),
				type: 'error'
			}
			return
		}
		ctx.body = Object.assign({ code: HttpCode.BAD_REQUEST, type: 'error' }, response)
	}

	await next()
}

export default responseMiddleware
