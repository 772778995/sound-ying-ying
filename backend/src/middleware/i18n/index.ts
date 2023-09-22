import { I18n } from 'i18n'
import { Middleware } from 'koa'
import { join } from 'path'

const i18n = new I18n().configure({
	locales: ['zh-CN', 'en-US'],
	directory: join(__dirname, './locales'),
	defaultLocale: 'zh-CN',
	cookie: 'locale'
})

const i18nMiddleware: Middleware = async (ctx, next) => {
	ctx.i18n = new I18n({}).__
	await next()
}

export default i18nMiddleware
