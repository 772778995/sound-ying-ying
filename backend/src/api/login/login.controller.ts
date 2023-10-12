import KoaRouter from 'koa-router'
import { loginByEmailCode, loginByPsdCode } from './login.service'

export default new KoaRouter()
	// .post('/login/phone/psd', loginByPhonePsd) // TODO
	// .post('/login/phone/sms-code', loginByPhonePsd) // TODO
	.post('/login/email/psd', loginByPsdCode)
	.post('/login/email/code', loginByEmailCode)
	.routes()
