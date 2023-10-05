import { IsEmail, IsNumberString, Length } from 'class-validator'
import { Entity, Column, Index } from 'typeorm'
import { BaseColumn } from '@/db/BaseColumn'
import { EmailCodeDto } from './email-code.dto'
import { UserEmailDto } from '../user/user.dto'

@Entity()
export class User extends BaseColumn implements UserEmailDto, EmailCodeDto {
	/** @filter 邮箱地址 */
	@Index()
	@Column()
	@IsEmail({}, { message: 'Please enter a valid email address' })
	email: string

	/** @filter 邮箱验证码 */
	@Index()
	@Column()
	@IsNumberString({}, { message: 'Please enter a 6-digit verification code' })
	@Length(6, undefined, { message: 'Please enter a 6-digit verification code' })
	emailCode: string
}
