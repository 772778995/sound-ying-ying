import { BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"

export abstract class BaseColumn extends BaseEntity {
    /** @filter UUID */
    @PrimaryGeneratedColumn('uuid')
    uuid: string

    /** @filter 创建时间 */
    @CreateDateColumn()
    readonly createDate: string

    /** @filter 更新时间 */
    @UpdateDateColumn()
    readonly updateDate: string

    /** @filter 删除时间 */
    @DeleteDateColumn()
    readonly deleteDate: string
}
