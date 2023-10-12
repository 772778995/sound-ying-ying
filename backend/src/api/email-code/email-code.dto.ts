import { IsDefined, IsNotEmpty, IsNumber, IsNumberString, Length, Max } from 'class-validator'
import { Mixin } from 'ts-mixer'
import { UserEmailDto } from '../user/user.dto'
import { size } from 'lodash'

export class EmailCodeDto {
	@IsNumberString({}, { message: 'Please enter a 6-digit verification code' })
	@Length(6, undefined, { message: 'Please enter a 6-digit verification code' })
	emailCode: string
}

export enum EmailCodeType {
	Register,
	Login
}

export class EmailCodeTypeDto {
	// @IsDefined({ message: 'Please provide a valid verification code type' })
	@IsNumber({}, { message: 'Please provide a valid verification code type' })
	// @Max(size(EmailCodeType) - 1, { message: 'Please provide a valid verification code type' })
	type: EmailCodeType
}

export class SendEmailCodeDto extends Mixin(UserEmailDto, EmailCodeTypeDto) {}
