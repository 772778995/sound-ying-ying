import { Middleware } from 'koa'
import { UserEntity } from '../user/user.entity'
import { RegisterByEmailDto } from './register.dto'
import { EmailCodeEntity } from '../email-code/email-code.entity'

/** @filter 邮箱注册 */
export const registerByEmail: Middleware = async ctx => {
	const { email, emailCode, psd } = await ctx.validate(RegisterByEmailDto, ctx.request.body)
	const isExist = await UserEntity.findOneBy({ email })
	if (isExist) ctx.return.error('The email has been registered')

	const isPass = await EmailCodeEntity.findOneByInTenMin({ email, emailCode })
	if (!isPass) ctx.return.error('Email or verification code error')

	await UserEntity.insert({
		email,
		psd
	})

	ctx.return.success('success register')
}
