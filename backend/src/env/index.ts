import dotenv from 'dotenv'
import path from 'path'

dotenv.config()
dotenv.config({ path: path.resolve(__dirname, `../../.env.${process.env.NODE_ENV}`) })

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			/** 服务主机 */
			SERVER_HOST: string
			/** 服务端口 */
			SERVER_PORT: number

			/** 数据库名 */
			DB_NAME: string
			/** 数据库地址 */
			DB_HOST: string
			/** 数据库端口号 */
			DB_PORT: number
			/** 数据库账号 */
			DB_USER: string
			/** 数据库密码 */
			DB_PSD: string
		}
	}
}
