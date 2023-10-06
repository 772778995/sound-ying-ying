import KoaRouter from 'koa-router'
import { sendEmailCode } from './email-code.service'

export default new KoaRouter()
	//
	.post('/send-code/email', sendEmailCode)
	.routes()
