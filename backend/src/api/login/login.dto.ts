import { Mixin } from 'ts-mixer'
import { EmailCodeDto } from '../email-code/email-code.dto'
import { UserEmailDto, UserPhoneDto, UserPsdDto } from '../user/user.dto'
import { SmsCodeDto } from '../sms-code/sms-code.dto'

export class LoginByEmailCodeDto extends Mixin(UserEmailDto, EmailCodeDto) {}

export class LoginByPhonePsdDto extends Mixin(UserPhoneDto, UserPsdDto) {}

export class LoginByPhoneCodeDto extends Mixin(UserPhoneDto, SmsCodeDto) {}

export class LoginByEmailPsdDto extends Mixin(UserEmailDto, UserPsdDto) {}
