import { Middleware } from 'koa'
import { User } from '../user/user.entity'
import { LoginByEmailCodeDto } from './login.dto'

/** @filter 邮箱验证码登录 */
export const loginByEmailCode: Middleware = async ctx => {
	const body = await ctx.validate(LoginByEmailCodeDto, ctx.request.body)
	// const user = User.findOneBy(body)
	ctx.return(body)
}
