
/* eslint-disable */

export type Urls = {
  post: "/user/register" | "/user/login" | "/send-sms"
  get: "/check-phone"
  all: Urls['post'] | Urls['get']
}


type ApiDetails = {
  
  post: {
    
    /**
     * 注册
     * @status -2
     * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108378202
     */
    "/user/register": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @description 手机号码
       * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108378202
       */
      'phone': string
      /**
       * @description 密码，6-12位
       * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108378202
       */
      'psd': string
      /**
       * @description 短信验证码，6位数字（测试：000000）
       * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108378202
       */
      'smsCode': string

    }

      response: {

    }

    }

    /**
     * 登录
     * @status -2
     * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108402061
     */
    "/user/login": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @description 密码，6-12位
       * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108402061
       */
      'psd'?: string
      /**
       * @description 短信验证码，6位数字（测试：000000）
       * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108402061
       */
      'smsCode'?: string
      /**
       * @description 手机号
       * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108402061
       */
      'phone': string

    }

      response: {
        /**
         * @description 响应状态码
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108402061
         */
        'code': number

        /**
         * @description 响应消息类型
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108402061
         */
        'type'?: string

        /**
         * @description 前端提示消息，type 值为空则不显示
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108402061
         */
        'msg': string

      }


    }

    /**
     * 发送短信验证码
     * @status -2
     * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-109377885
     */
    "/send-sms": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @description 1：注册，2：登录
       * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-109377885
       */
      'type'?: number
      /**
       * @description 手机号码
       * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-109377885
       */
      'phone': string

    }

      response: {

    }

    }

  }


  get: {
    
    /**
     * 检查手机号码
     * @status -2
     * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-109376969
     */
    "/check-phone": {
      contentType: "none"
      params: {
        /**
         * @description 要检查的手机号码
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-109376969
         */
        'phone'?: string

      }

      data: never

      response: {

    }

    }

  }

}

