
/* eslint-disable */

export type Urls = {
  post: "/user/create-user" | "/user/login"
  all: Urls['post']
}

export type RefSchema = {
	
}

type ApiDetails = {
  
  post: {
    
    /**
     * 创建用户
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108378202
     */
    "/user/create-user": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @description 用户昵称
       * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108378202
       */
      'name': string
      /**
       * @description 手机号码
       * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108378202
       */
      'phone': number
      /**
       * @description 邮箱地址
       * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108378202
       */
      'email'?: string
      /**
       * @description 密码，6-12位
       * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108378202
       */
      'psd': string

    }

      response: {

    }

    }

    /**
     * 登录
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108402061
     */
    "/user/login": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @description 手机号 | 邮箱
       * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108402061
       */
      'account': string
      /**
       * @description 密码，6-12位
       * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108402061
       */
      'psd'?: string
      /**
       * @description 短信验证码，6位数字
       * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108402061
       */
      'smsCode': string

    }

      response: {

    }

    }

  }

}

