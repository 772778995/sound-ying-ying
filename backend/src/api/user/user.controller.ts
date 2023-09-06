import KoaRouter from 'koa-router'
import { login, register } from './user.service'

export default new KoaRouter()
	//
	.post('/user/login', login)
	.post('/user/register', register)
	.routes()
