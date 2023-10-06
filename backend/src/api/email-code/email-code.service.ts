import { Middleware } from 'koa'
import { SendEmailCodeDto } from './email-code.dto'
import { EmailCodeEntity } from './email-code.entity'
import { random } from 'lodash'
import { sendMail } from '@/util/mail'

export const sendEmailCode: Middleware = async ctx => {
	const { email } = await ctx.validate.body(SendEmailCodeDto)

	const isFrequently = await EmailCodeEntity.checkRecentEmailRecord(email)
	if (isFrequently) ctx.return.error('Please try again later')

	const emailCode = random(100000, 999999).toString()
	await sendMail({ to: email, text: ctx.i18n.__('Your registration verification code: {{emailCode}}', { emailCode }) })
	;(await ctx.validate.entity(EmailCodeEntity.create({ email, emailCode }))).save()

	ctx.return.success('The verification code has been sent Please check it carefully')
}
