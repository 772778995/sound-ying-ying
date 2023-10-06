import { Length, IsEmail, IsMobilePhone } from 'class-validator'
import { Entity, Column, Index } from 'typeorm'
import { BaseColumn } from '@/db/BaseColumn'
import { UserEmailDto, UserPhoneDto, UserPsdDto } from './user.dto'

@Entity()
export class UserEntity extends BaseColumn implements UserPhoneDto, UserEmailDto, UserPsdDto {
	/** @filter 手机号码 */
	@Index()
	@Column({ length: 11, nullable: true })
	@IsMobilePhone('zh-CN', {}, { message: 'Please enter a valid phone number' })
	phone: string

	/** @filter 邮箱地址 */
	@Index()
	@Column({ nullable: true })
	@IsEmail({}, { message: 'Please enter a valid email address' })
	email: string

	/** @filter 密码，6-20个字符 */
	@Column({ length: 20 })
	@Length(6, 20, { message: 'Please enter a password of 6-20 characters' })
	psd: string
}
