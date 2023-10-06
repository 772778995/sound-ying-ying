import KoaRouter from 'koa-router'
import registerController from './register/register.controller'
import loginController from './login/login.controller'
import emailCodeController from './email-code/email-code.controller'

const router = new KoaRouter()
	//
	.use(emailCodeController)
	.use(registerController)
	.use(loginController)

export default router
