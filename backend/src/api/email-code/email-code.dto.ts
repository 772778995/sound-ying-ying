import { IsNumberString, Length } from 'class-validator'
import { Mixin } from 'ts-mixer'
import { UserEmailDto } from '../user/user.dto'

export class EmailCodeDto {
	@IsNumberString({}, { message: 'Please enter a 6-digit verification code' })
	@Length(6, undefined, { message: 'Please enter a 6-digit verification code' })
	emailCode: string
}

export class SendEmailCodeDto extends UserEmailDto {}
