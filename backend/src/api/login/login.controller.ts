import KoaRouter from 'koa-router'
import { loginByEmailCode } from './login.service'

export default new KoaRouter()
	// .post('/user/login/phone/psd', loginByPhonePsd) // TODO
	// .post('/user/login/phone/sms-code', loginByPhonePsd) // TODO
	// .post('/user/login/email/psd', loginByPhonePsd) // TODO
	.post('/login/email/code', loginByEmailCode)
	.routes()
