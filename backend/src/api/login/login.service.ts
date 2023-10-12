import { Context, Middleware } from 'koa'
import { User } from '../user/user.entity'
import { LoginByEmailCodeDto, LoginByEmailPsdDto } from './login.dto'
import { EmailCode } from '../email-code/email-code.entity'
import { getToken } from '@/middleware/jwt'
import { omit } from 'lodash'
import { EmailCodeType } from '../email-code/email-code.dto'

export const loginRes = (ctx: Context, user: User) => {
	const token = getToken({
		...user,
		userAgent: ctx.request.header['user-agent']
	})
	ctx.return.success({
		msg: ctx.i18n.__('Login successful'),
		data: {
			userInfo: {
				...omit(user, 'psd'),
				phone: user.phone.replace(/(?<=\d{3})\d{4}/, '****')
			},
			token
		}
	})
}

/** @filter 邮箱验证码登录 */
export const loginByEmailCode: Middleware = async ctx => {
	const { email, emailCode } = await ctx.validate(LoginByEmailCodeDto, ctx.request.body)
	const isPass = await EmailCode.findOneByInTenMin({ email, emailCode, type: EmailCodeType.Login })
	if (!isPass) ctx.return.error('Email or verification code error')
	const user = await User.findOneBy({ email })
	if (!user) return ctx.return.error('User does not exist')
	loginRes(ctx, user)
}

/** @filter 邮箱密码登录 */
export const loginByPsdCode: Middleware = async ctx => {
	const { email, psd } = await ctx.validate(LoginByEmailPsdDto, ctx.request.body)
	const user = await User.findOneBy({ email, psd })
	if (!user) return ctx.return.error('Email or password error')
	loginRes(ctx, user)
}
