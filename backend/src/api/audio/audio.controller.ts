import KoaRouter from 'koa-router'
import { getAllAudio } from './audio.service'

export default new KoaRouter()
	//
	// .post('/send-code/email', sendEmailCode)
	.get('/audio/:uuid', getAllAudio)
	.routes()
