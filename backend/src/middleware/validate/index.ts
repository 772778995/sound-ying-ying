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
	const ctxValidate = (async (dto: any, obj: any) => {
		const data = plainToClass(dto, obj)
		const errList = await validate(data)

		if (!errList.length) return obj

		const errMsg = errList
			.map(err => map(err.constraints))
			.flat()
			.map(msg => ctx.i18n.__(msg))
			.join('<br/>')

		ctx.return.error(errMsg)
	}) as typeof ctx.validate

	ctxValidate.query = dto => ctxValidate(dto, ctx.query)
	ctxValidate.body = dto => ctxValidate(dto, ctx.request.body)
	ctxValidate.entity = async entity => {
		const errList = await validate(entity)
		if (!errList.length) return entity

		const errMsg = errList
			.map(err => map(err.constraints))
			.flat()
			.map(msg => ctx.i18n.__(msg))
			.join('<br/>')
		throw new ValidateError(errMsg)
	}

	ctx.validate = ctxValidate
	await next()
}

export default validateMiddleware
