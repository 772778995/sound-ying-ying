import KoaRouter from 'koa-router'
import registerController from './register/register.controller'
import loginController from './login/login.controller'

const router = new KoaRouter()
	//
	.use(registerController)
	.use(loginController)

export default router
