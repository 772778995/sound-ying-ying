import { Middleware } from 'koa'
import { EmailCodeType, SendEmailCodeDto } from './email-code.dto'
import { EmailCode } from './email-code.entity'
import { random } from 'lodash'
import { sendMail } from '@/util/mail'

export const sendEmailCode: Middleware = async ctx => {
	const { email, type } = await ctx.validate.body(SendEmailCodeDto)

	const isFrequently = await EmailCode.checkRecentEmailRecord(email)
	if (isFrequently) ctx.return.error('Please try again later')

	const emailCode = random(100000, 999999).toString()
	await EmailCode.createQueryBuilder().softDelete().where({ email }).execute()
	const msg = `Your ${type === EmailCodeType.Login ? 'login' : 'registration'} verification code: {{emailCode}}`
	await sendMail({ to: email, text: ctx.i18n.__(msg, { emailCode }) })
	;(await ctx.validate.entity(EmailCode.create({ email, emailCode, type }))).save()

	ctx.return.success('The verification code has been sent Please check it carefully')
}
