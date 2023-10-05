import { Middleware } from 'koa'
import { User } from '../user/user.entity'
import { RegisterByEmailDto } from './register.dto'

/** @filter 邮箱注册 */
export const registerByEmail: Middleware = async ctx => {
	const body = await ctx.validate(RegisterByEmailDto, ctx.request.body)
	const isExist = await User.findOneBy({ phone: body.email })
	if (isExist) ctx.return.error('The phone number has been registered')

	// await saveData(ctx, User.create(body))
	ctx.return.success('success register')
}
