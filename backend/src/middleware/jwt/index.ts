import whiteApis from '@/api/white-apis'
import koaJwt from 'koa-jwt'
import jsonwebtoken from 'jsonwebtoken'

export const JWT_SECRET = '5i996'
export const getToken = (obj: any) => jsonwebtoken.sign(obj, JWT_SECRET, { expiresIn: '30d' })

const jwtMiddle = koaJwt({
	secret: JWT_SECRET,
	debug: true
}).unless({ path: whiteApis.map(path => '/api' + path) })

export default jwtMiddle
