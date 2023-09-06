import { Length, IsPhoneNumber, IsEmail } from "class-validator"
import { Entity, Column, PrimaryColumn } from "typeorm"
import { BaseColumn } from './BaseColumn'

@Entity()
export class User extends BaseColumn {
    /** @filter 手机号码 */
    @PrimaryColumn()
    @IsPhoneNumber()
    phone!: number

    /** @filter 邮箱地址 */
    @PrimaryColumn()
    @IsEmail()
    email: string
    
    /** @filter 用户昵称 */
    @Column()
    @Length(6, 12)
    name!: string

    /** @filter 密码 */
    @Column()
    @Length(6, 12)
    psd!: string
}