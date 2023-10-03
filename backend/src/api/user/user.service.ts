import { User } from '@/api/user/user.entity'
import saveData from '@/db/saveData'
import { Middleware } from 'koa'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { LoginDto } from './user.dto'

/** @filter 登录 */
export const login: Middleware = async ctx => {
	// const body = plainToClass(LoginDto, ctx.request.body)
	// const res = await validate(body)
	const body = await ctx.validate(LoginDto, ctx.request.body)
	ctx.return(body)
	// const { phone, smsCode, psd } = ctx.request.body
	// if (!smsCode && !psd) ctx.return.error('Login exception')
	// let user = await User.findOneBy({ phone })
	// if (!user)
}

/** @filter 注册 */
export const register: Middleware = async ctx => {
	const body = ctx.request.body
	ctx.query
	const isExist = await User.findOneBy({ phone: body.phone })
	if (isExist) ctx.return.error('The phone number has been registered')

	await saveData(ctx, User.create(body))
	ctx.return.success('success register')
}
