import { User } from '@/db/entity/User'
import { MiddlewareBody } from '@/typings/koa-core'
import { CreateUserDto, LoginDto } from '@/typings/types'
import { Middleware } from 'koa'

/** @filter 登录 */
export const login: Middleware = async ctx => {
	ctx.return(ctx.body)
}

/** @filter 创建用户 */
export const createUser: MiddlewareBody<CreateUserDto> = async ctx => {
	const res = await User.insert(ctx.body)

	ctx.return.success('成功创建用户')
}
