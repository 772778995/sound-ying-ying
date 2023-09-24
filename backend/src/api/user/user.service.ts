import { User } from '@/db/entity/User'
import saveData from '@/db/saveData'
import { RegisterDto, LoginDto } from '@/typings/types'
import { Middleware } from 'koa'

/** @filter 登录 */
export const login: Middleware = async ctx => {
	ctx.return(ctx.body)
}

/** @filter 注册 */
export const register: Middleware = async ctx => {
	const body = ctx.request.body as RegisterDto
	await saveData(ctx, User.create(body))
	ctx.return.success('success register')
}
