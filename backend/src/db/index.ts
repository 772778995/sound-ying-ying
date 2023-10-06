import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { UserEntity } from '@/api/user/user.entity'
import { EmailCodeEntity } from '@/api/email-code/email-code.entity'

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: 'root',
	database: 'sound_ying_ying',
	synchronize: true,
	logging: false,
	entities: [UserEntity, EmailCodeEntity],
	migrations: [],
	subscribers: []
})
