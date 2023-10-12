import { Middleware } from 'koa'
import { User } from '../user/user.entity'
import { RegisterByEmailDto } from './register.dto'
import { EmailCode } from '../email-code/email-code.entity'
import { EmailCodeType } from '../email-code/email-code.dto'

/** @filter 邮箱注册 */
export const registerByEmail: Middleware = async ctx => {
	const { email, emailCode, psd } = await ctx.validate(RegisterByEmailDto, ctx.request.body)
	const isExist = await User.findOneBy({ email })
	if (isExist) ctx.return.error('The email has been registered')

	const isPass = await EmailCode.findOneByInTenMin({ email, emailCode, type: EmailCodeType.Register })
	if (!isPass) ctx.return.error('Email or verification code error')

	await User.insert({
		email,
		psd
	})

	ctx.return.success('success register')
}
