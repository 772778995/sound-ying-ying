import { validate } from 'class-validator'
import { map } from 'lodash'
import { BaseColumn } from './entity/BaseColumn'
import { Context } from 'koa'

export class ValidateError extends Error {
	constructor(errMsg: string) {
		super(errMsg)
	}
	code: 'VALIDATE_ERROR'
}

export default async (ctx: Context, obj: BaseColumn) => {
	const errList = await validate(obj)
	if (!errList.length) return await obj.save()

	const errMsg = errList
		.map(err => map(err.constraints))
		.flat()
		.map(msg => ctx.i18n.__(msg))
		.join('<br/>')
	throw new ValidateError(errMsg)
}
