import KoaRouter from 'koa-router'
import { registerByEmail } from './register.service'

export default new KoaRouter()
	//
	.post('/register/email', registerByEmail)
	.routes()
