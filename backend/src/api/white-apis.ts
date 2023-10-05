import { Urls } from '@/typings/apis'

const whiteApis: Urls['all'][] = [
	//
	'/send-code/email',
	'/send-code/sms',
	'/login/email/code',
	'/login/email/psd',
	'/login/phone/psd',
	'/login/phone/code',
	'/register/email',
	'/register/phone'
]

export default whiteApis
