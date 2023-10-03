import { IsMobilePhone, IsNumberString, Length } from "class-validator";

export class LoginDto {
  @IsMobilePhone('zh-CN', {}, { message: 'Please enter a valid phone number' })
  phone: string

  @Length(6, 20, { message: 'Please enter a password of 6-20 characters' })
  psd: string

  @IsNumberString({}, { message: 'Please enter a 6-digit verification code' })
  @Length(6, 6, { message: 'Please enter a 6-digit verification code' })
  smsCode: string
}