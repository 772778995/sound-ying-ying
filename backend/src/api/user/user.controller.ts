import KoaRouter from 'koa-router'
import { login, createUser } from './user.service'

export default new KoaRouter()
	.post('/user/login', login)
  .post('/user/create-user', createUser)
  .routes()
