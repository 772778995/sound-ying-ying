import { I18n } from 'i18n'
import { Middleware } from 'koa'
import { join } from 'path'

const i18n = new I18n()
i18n.configure({
	locales: ['zh-CN', 'en-US'],
	defaultLocale: 'en-US',
	directory: join(__dirname, './locales')
})

const i18nMiddleware: Middleware = async (ctx, next) => {
	const locale = ctx.cookies.get('locale')
	if (locale) i18n.setLocale(locale)
	ctx.i18n = i18n
	await next()
}

export default i18nMiddleware
