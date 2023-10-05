import { IsNumberString, Length } from 'class-validator'

export class SmsCodeDto {
	@IsNumberString({}, { message: 'Please enter a 6-digit verification code' })
	@Length(6, undefined, { message: 'Please enter a 6-digit verification code' })
	smsCode: string
}
