import { User } from '@/db/entity/User'
import { RegisterDto, LoginDto } from '@/typings/types'
import { Middleware } from 'koa'

/** @filter 登录 */
export const login: Middleware = async ctx => {
	ctx.return(ctx.body)
	ctx.request.body
}

/** @filter 注册 */
export const register: Middleware = async ctx => {
	await User.insert(ctx.request.body as RegisterDto)
	ctx.return.success('成功注册用户')
}
