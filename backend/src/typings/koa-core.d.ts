import { Context, DefaultContext, ExtendableContext, Next, ParameterizedContext } from 'koa'
import { Htt, Object } from 'can-can-word-bug'
import { HttpCode } from 'can-can-word-bug'
import { RoutePaths } from './types'
import locale from '@/middleware/i18n/locales/zh-CN.json'
import { I18n } from 'i18n'
import { BaseColumn } from '@/db/BaseColumn'

type Locale = typeof locale

declare module 'koa' {
	interface ExtendableContext {
		validate: {
			<T>(dto: T, obj: any): Promise<InstanceType<T>>
			query: <T>(dto: T) => Promise<InstanceType<T>>
			body: <T>(dto: T) => Promise<InstanceType<T>>
			entity: <T extends BaseColumn, E extends InstanceType<T>>(entity: E) => Promise<E>
		}

		i18n: I18n

		/** @filter 结束响应 */
		done: () => never

		/** @filter 基础响应，无返回提示消息 */
		return: {
			(
				/** @filter 响应内容 */
				data: any,
				/** @filter 响应状态码 @default HttpCode.OK */
				code = Code.OK
			): any

			/** @filter 成功响应 */
			success: (
				response:
					| {
							/** @filter 响应状态码 @default HttpCode.OK */
							code?: HttpCode
							/** @filter 响应内容 */
							data?: any
							/** @filter 前端成功提示信息 */
							msg: string
					  }
					/** @filter 前端成功提示信息 */
					| string
			) => any

			/** @filter 信息响应 */
			info: (
				response:
					| {
							/** @filter 响应状态码 @default HttpCode.OK */
							code?: HttpCode
							/** @filter 响应内容 */
							data?: any
							/** @filter 前端信息提示 */
							msg: string
					  }
					| string
			) => any

			/** @filter 警告响应 */
			warning: (
				response:
					| {
							/** @filter 响应状态码 @default HttpCode.OK */
							code?: HttpCode
							/** @filter 响应内容 */
							data?: any
							/** @filter 前端警告信息提示 */
							msg: string
					  }
					| string
			) => any

			/** @filter 错误响应 */
			error: (
				response:
					| {
							/** @filter 响应状态码 @default HttpCode.BAD_REQUEST */
							code?: HttpCode
							/** @filter 响应内容 */
							data?: any
							/** @filter 前端错误信息提示 */
							msg: string
					  }
					| string
			) => any
		}
	}
}
