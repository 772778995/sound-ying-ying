import { IsEmail, IsNumber, IsNumberString, Length } from 'class-validator'
import { Entity, Column, Index } from 'typeorm'
import { BaseColumn } from '@/db/BaseColumn'
import { EmailCodeDto, EmailCodeType, EmailCodeTypeDto } from './email-code.dto'
import { UserEmailDto } from '../user/user.dto'
import dayjs from 'dayjs'

@Entity()
export class EmailCode extends BaseColumn implements UserEmailDto, EmailCodeDto, EmailCodeTypeDto {
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

	/** @filter 验证码类型 */
	@Column()
	@IsNumber()
	type: EmailCodeType

	/** @filter 检查一分钟内是否有记录 */
	static async checkRecentEmailRecord(email: string): Promise<boolean> {
		const oneMinAgo = new Date(dayjs().subtract(1, 'm').valueOf())

		const res = await this.createQueryBuilder('emailCode')
			.where('emailCode.createDate >= :oneMinutesAgo', { oneMinutesAgo: oneMinAgo })
			.andWhere('emailCode.email = :email', { email })
			.getOne()

		return !!res
	}

	static async findOneByInTenMin(search: { email: string; emailCode: string; type: EmailCodeType }) {
		const { email, emailCode } = search
		const tenMinAgo = new Date(dayjs().add(10, 'm').valueOf())

		const res = await this.createQueryBuilder('emailCode')
			.where({ email, emailCode })
			.andWhere('emailCode.createDate <= :tenMinAgo', { tenMinAgo })
			.getOne()

		if (res) await res.softRemove()

		return res
	}
}
