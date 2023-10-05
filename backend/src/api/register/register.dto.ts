import { Mixin } from 'ts-mixer'
import { UserEmailDto, UserPsdDto } from '../user/user.dto'
import { EmailCodeDto } from '../email-code/email-code.dto'

export class RegisterByEmailDto extends Mixin(UserEmailDto, UserPsdDto, EmailCodeDto) {}
