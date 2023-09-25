import { Length, IsEmail, IsMobilePhone } from 'class-validator'
import { Entity, Column } from 'typeorm'
import { BaseColumn } from '@/db/BaseColumn'

@Entity()
export class User extends BaseColumn {
	/** @filter 手机号码 */
	@Column({ unique: true, length: 11 })
	@IsMobilePhone('zh-CN', {}, { message: 'Please enter a valid phone number' })
	phone: string

	/** @filter 邮箱地址 */
	@Column({ nullable: true })
	@IsEmail({}, { message: 'Please enter a valid email address' })
	email: string

	/** @filter 密码，6-20个字符 */
	@Column({ length: 20 })
	@Length(6, 20, { message: 'Please enter a password of 6-20 characters' })
	psd: string
}
