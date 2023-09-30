import { HttpCode } from 'can-can-word-bug'
import { Middleware } from 'koa'
import _ from 'lodash'

const responseMiddleware: Middleware = async (ctx, next) => {
	ctx.return = ((data: any, code = HttpCode.OK) => {
		ctx.body = { code, data }
		ctx.done()
	}) as any

	ctx.return.success = (response: any) => {
		if (_.isString(response)) response = { msg: ctx.i18n.__(response), type: 'success' }
		ctx.body = Object.assign({ code: HttpCode.OK, type: 'success' }, response)
		ctx.done()
	}
	ctx.return.warning = (response: any) => {
		if (_.isString(response)) response = { msg: ctx.i18n.__(response), type: 'warning' }
		ctx.body = Object.assign({ code: HttpCode.OK, type: 'warning' }, response)
		ctx.done()
	}
	ctx.return.info = (response: any) => {
		if (_.isString(response)) response = { msg: ctx.i18n.__(response), type: 'info' }
		ctx.body = Object.assign({ code: HttpCode.OK, type: 'info' }, response)
		ctx.done()
	}
	ctx.return.error = (response: any) => {
		if (_.isString(response)) {
			ctx.body = {
				code: HttpCode.BAD_REQUEST,
				msg: ctx.i18n.__(response),
				type: 'error'
			}
			return ctx.done()
		}
		ctx.body = Object.assign({ code: HttpCode.BAD_REQUEST, type: 'error' }, response)
		ctx.done()
	}

	await next()
}

export default responseMiddleware
