import { User } from '@/api/user/user.entity'
import saveData from '@/db/saveData'
import { RegisterDto, LoginDto } from '@/typings/types'
import { Middleware } from 'koa'

/** @filter 登录 */
export const login: Middleware = async ctx => {
	ctx.return(ctx.request.body)
}

/** @filter 注册 */
export const register: Middleware = async ctx => {
	const body = ctx.request.body as RegisterDto
	ctx.query
	const isExist = await User.findOneBy({ phone: body.phone })
	if (isExist) ctx.return.error('The phone number has been registered')

	await saveData(ctx, User.create(body))
	ctx.return.success('success register')
}
