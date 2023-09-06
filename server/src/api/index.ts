import KoaRouter from 'koa-router'
import userController from './user/user.controller'

const router = new KoaRouter()
	.use(userController)

export default router
