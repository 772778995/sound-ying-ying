import koaRange from 'koa-range'
import Koa from 'koa'
import koaStatic from 'koa-static'
import KoaRouter from 'koa-router'
import koaBody from 'koa-body'
import { accessLogger, logger } from './logs/logger'
import api from './api'
import path from 'path'
import response from './middleware/response'
import { AppDataSource } from './db'
import koaCros from 'koa2-cors'
import doneMiddleware from './middleware/done'
import throwError from './util/throwError'
import errorMiddle from './middleware/error'
import i18nMiddleware from './middleware/i18n'
import validateMiddleware from './middleware/validate'
import jwtMiddle from './middleware/jwt'

const bootstrap = async () => {
	await AppDataSource.initialize()
		.then(() => logger('成功启动数据库'))
		.catch(err => throwError(`启动数据库失败：${err.message}`))

	const app = new Koa()
	const staticService = koaStatic(path.join(__dirname, './public'))
	const router = new KoaRouter()
	router.use('/api', api.routes())
	app.proxy = true
	app
		.use(koaCros())
		.use(koaRange)
		.use(staticService)
		.use(response)
		.use(doneMiddleware)
		.use(errorMiddle)
		.use(accessLogger())
		.use(router.allowedMethods())
		.use(koaBody({ multipart: true }))
		.use(i18nMiddleware)
		.use(validateMiddleware)
		.use(jwtMiddle)
		.use(router.routes())
		.listen(54088, () => logger(`http://127.0.0.1:54088`))
		.on('error', err => throwError(`启动服务失败：${err.message}`))
}

bootstrap()
