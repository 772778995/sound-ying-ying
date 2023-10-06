import { IsEmail, IsNumberString, Length } from 'class-validator'
import { Entity, Column, Index } from 'typeorm'
import { BaseColumn } from '@/db/BaseColumn'
import { EmailCodeDto } from './email-code.dto'
import { UserEmailDto } from '../user/user.dto'
import dayjs from 'dayjs'

@Entity()
export class EmailCodeEntity extends BaseColumn implements UserEmailDto, EmailCodeDto {
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

	/** @filter 检查一分钟内是否有记录 */
	static async checkRecentEmailRecord(email: string): Promise<boolean> {
		const oneMinAgo = new Date(dayjs().subtract(1, 'm').valueOf())

		const res = await this.createQueryBuilder('emailCode')
			.where('emailCode.createDate >= :oneMinutesAgo', { oneMinutesAgo: oneMinAgo })
			.andWhere('emailCode.email = :email', { email })
			.getOne()

		return !!res
	}

	static async findOneByInTenMin(search: { email: string; emailCode: string }) {
		const { email, emailCode } = search
		const tenMinAgo = new Date(dayjs().add(10, 'm').valueOf())

		const res = await this.createQueryBuilder('emailCode')
			.where('emailCode.email = :email', { email })
			.andWhere('emailCode.emailCode = :emailCode', { emailCode })
			.andWhere('emailCode.createDate <= :tenMinAgo', { tenMinAgo })
			.getOne()

		return res
	}
}
