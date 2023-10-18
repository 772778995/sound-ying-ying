import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from '@/api/user/user.entity'
import { EmailCode } from '@/api/email-code/email-code.entity'

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	username: process.env.DB_USER,
	password: process.env.DB_PSD,
	database: process.env.DB_NAME,
	synchronize: process.env.NODE_ENV === 'development',
	logging: process.env.NODE_ENV === 'production',
	entities: [User, EmailCode],
	migrations: [],
	subscribers: []
})
