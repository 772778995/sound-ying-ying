import { BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm'

export abstract class BaseColumn extends BaseEntity {
	/** @filter UUID */
	@PrimaryGeneratedColumn('uuid')
	uuid: string

	/** @filter 创建时间 */
	@CreateDateColumn()
	createDate: Date

	/** @filter 更新时间 */
	@UpdateDateColumn()
	updateDate: Date

	/** @filter 删除时间 */
	@DeleteDateColumn()
	deleteDate: Date
}
