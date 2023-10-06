import { BaseColumn } from '@/db/BaseColumn'
import { validate } from 'class-validator'
import { Middleware } from 'koa'
import { map } from 'lodash'

export class ValidateError extends Error {
	constructor(errMsg: string) {
		super(errMsg)
	}
	code: 'VALIDATE_ERROR'
}

const saveDataMiddleware: Middleware = async (ctx, next) => {
	ctx.saveData = async (entity: BaseColumn) => {
		const errList = await validate(entity)
		if (!errList.length) return await entity.save()

		const errMsg = errList
			.map(err => map(err.constraints))
			.flat()
			.map(msg => ctx.i18n.__(msg))
			.join('<br/>')
		throw new ValidateError(errMsg)
	}
	await next()
}

export default saveDataMiddleware
