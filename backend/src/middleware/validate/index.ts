import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { Middleware } from 'koa'
import { map } from 'lodash'

export class ValidateError extends Error {
	constructor(errMsg: string) {
		super(errMsg)
	}
	code: 'VALIDATE_ERROR'
}

const validateMiddleware: Middleware = async (ctx, next) => {
	ctx.validate = async (classObj: any, obj: any) => {
		const data = plainToClass(classObj, obj)
		const errList = await validate(data)

		if (!errList.length) return obj

		const errMsg = errList
			.map(err => map(err.constraints))
			.flat()
			.map(msg => ctx.i18n.__(msg))
			.join('<br/>')

		ctx.return.error(errMsg)
	}
	await next()
}

export default validateMiddleware
