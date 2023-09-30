/* eslint-disable */

export type Urls = {
	post: '/user/register' | '/user/login' | '/send-sms' | '/demo/create' | '/demo/update'
	get: '/check-phone' | '/demo/list' | '/demo/find' | '/demo/delete'
	all: Urls['post'] | Urls['get']
}

export type RefSchema = {
	code: number

	resMsgType: string

	resSchema: {
		/**
		 * @description 响应状态码
		 */
		code: RefSchema['code']
		/**
		 * @description 响应消息类型
		 */
		type?: RefSchema['resMsgType']
		/**
		 * @description 前端提示消息，type 值为空则不显示
		 */
		msg: string
	}
}
type ApiDetails = {
	post: {
		/**
		 * 注册
		 * @status developing
		 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108378202
		 */
		'/user/register': {
			contentType: 'application/json'
			params: never

			data: {
				/**
				 * @description 手机号码
				 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108378202
				 */
				phone: string
				/**
				 * @description 密码，6-12位
				 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108378202
				 */
				psd: string
				/**
				 * @description 短信验证码，6位数字（测试：000000）
				 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108378202
				 */
				smsCode: string
			}

			response: {}
		}

		/**
		 * 登录
		 * @status developing
		 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108402061
		 */
		'/user/login': {
			contentType: 'application/json'
			params: never

			data: {
				/**
				 * @description 密码，6-12位
				 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108402061
				 */
				psd?: string
				/**
				 * @description 短信验证码，6位数字（测试：000000）
				 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108402061
				 */
				smsCode?: string
				/**
				 * @description 手机号
				 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108402061
				 */
				phone: string
			}

			response: RefSchema['resSchema']
		}

		/**
		 * 发送短信验证码
		 * @status developing
		 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-109377885
		 */
		'/send-sms': {
			contentType: 'application/json'
			params: never

			data: {
				/**
				 * @description 1：注册，2：登录
				 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-109377885
				 */
				type?: number
				/**
				 * @description 手机号码
				 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-109377885
				 */
				phone: string
			}

			response: {}
		}

		/**
		 * 创建
		 * @status developing
		 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-113407134
		 */
		'/demo/create': {
			contentType: 'application/json'
			params: never

			data: {
				/**
				 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-113407134
				 */
				name: string
			}

			response: {}
		}

		/**
		 * 更新
		 * @status developing
		 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-113407785
		 */
		'/demo/update': {
			contentType: 'application/json'
			params: never

			data: {
				/**
				 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-113407785
				 */
				id: string
				/**
				 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-113407785
				 */
				name: string
			}

			response: {}
		}
	}

	get: {
		/**
		 * 检查手机号码
		 * @status developing
		 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-109376969
		 */
		'/check-phone': {
			contentType: 'none'
			params: {
				/**
				 * @description 要检查的手机号码
				 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-109376969
				 */
				phone?: string
			}

			data: never

			response: {}
		}

		/**
		 * 查询列表
		 * @status developing
		 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-113407545
		 */
		'/demo/list': {
			contentType: 'none'
			params: {
				/**
				 * @description 页码
				 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-113407545
				 */
				page: number
				/**
				 * @description 单页数量
				 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-113407545
				 */
				pageSize: number
			}

			data: never

			response: {}
		}

		/**
		 * 查询
		 * @status developing
		 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-113407665
		 */
		'/demo/find': {
			contentType: 'none'
			params: {
				/**
				 * @description 唯一ID
				 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-113407665
				 */
				id: string
			}

			data: never

			response: {}
		}

		/**
		 * 删除
		 * @status developing
		 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-113407959
		 */
		'/demo/delete': {
			contentType: 'application/json'
			params: never

			data: {
				/**
				 * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-113407959
				 */
				id: string
			}

			response: {}
		}
	}
}
