import { IsEmail, IsMobilePhone, IsNumberString, Length, MaxLength } from 'class-validator'

export class UserPhoneDto {
	@IsMobilePhone('zh-CN', {}, { message: 'Please enter a valid phone number' })
	phone: string
}

export class UserEmailDto {
	@IsEmail({}, { message: 'Please enter a valid email address' })
	@MaxLength(255, { message: 'Email address is too long' })
	email: string
}

export class UserPsdDto {
	@Length(6, 20, { message: 'Please enter a password of 6-20 characters' })
	psd: string
}
