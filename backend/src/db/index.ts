import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from '@/api/user/user.entity'

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: 'root',
	database: 'sound_ying_ying',
	synchronize: true,
	logging: false,
	entities: [User],
	migrations: [],
	subscribers: []
})
