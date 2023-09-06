import { Length, IsPhoneNumber, IsEmail } from 'class-validator'
import { Entity, Column, PrimaryColumn } from 'typeorm'
import { BaseColumn } from './BaseColumn'

@Entity()
export class User extends BaseColumn {
	/** @filter 手机号码 */
	@PrimaryColumn({ unique: true, length: 11 })
	@IsPhoneNumber()
	phone!: string

	/** @filter 邮箱地址 */
	@PrimaryColumn({ unique: true })
	@IsEmail()
	email: string

	/** @filter 用户昵称 */
	@PrimaryColumn({ unique: true, length: 12 })
	@Length(6, 12)
	name!: string

	/** @filter 密码 */
	@Column({ length: 12 })
	@Length(6, 12)
	psd!: string
}
