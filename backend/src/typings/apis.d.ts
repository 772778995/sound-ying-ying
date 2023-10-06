/* eslint-disable */

export type Urls = {
  post:
    | "/login/phone/psd"
    | "/login/phone/code"
    | "/login/email/psd"
    | "/login/email/code"
    | "/register/email"
    | "/register/phone"
    | "/send-code/sms"
    | "/send-code/email";
  all: Urls["post"];
};

export type RefSchema = {
  code: number;

  resMsgType: string;

  psd: string;

  resSchema: {
    /**
     * @description 响应状态码
     */
    code: RefSchema["code"];
    /**
     * @description 响应消息类型
     */
    type?: RefSchema["resMsgType"];
    /**
     * @description 前端提示消息，type 值为空则不显示
     */
    msg?: string;
  };

  email: string;

  code: string;

  phone: string;
};

type ApiDetails = {
  post: {
    /**
     * 手机号密码登录
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108402061
     */
    "/login/phone/psd": {
      contentType: "application/json";
      params: never;

      data: {
        /**
         * @description 密码，6-20位
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108402061
         */
        psd: RefSchema["psd"];
        /**
         * @description 手机号
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108402061
         */
        phone: RefSchema["phone"];
      };

      response: RefSchema["resSchema"];
    };

    /**
     * 手机号验证码登录
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-114326060
     */
    "/login/phone/code": {
      contentType: "application/json";
      params: never;

      data: {
        /**
         * @description 手机号
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-114326060
         */
        phone: RefSchema["phone"];
        /**
         * @description 验证码，6位数字，测试：000000
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-114326060
         */
        smsCode: RefSchema["code"];
      };

      response: {};
    };

    /**
     * 邮箱密码登录
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-114326067
     */
    "/login/email/psd": {
      contentType: "application/json";
      params: never;

      data: {
        /**
         * @description 邮箱地址，最长255个字符
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-114326067
         */
        email: RefSchema["email"];
        /**
         * @description 密码，6-20位字符
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-114326067
         */
        psd: RefSchema["psd"];
      };

      response: {};
    };

    /**
     * 邮箱验证码登录
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-114326072
     */
    "/login/email/code": {
      contentType: "application/json";
      params: never;

      data: {
        /**
         * @description 邮箱地址，最长255个字符
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-114326072
         */
        email: RefSchema["email"];
        /**
         * @description 邮箱验证码
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-114326072
         */
        emailCode: RefSchema["code"];
      };

      response: {};
    };

    /**
     * 邮箱注册
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108378202
     */
    "/register/email": {
      contentType: "application/json";
      params: never;

      data: {
        /**
         * @description 密码，6-20位
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108378202
         */
        psd: RefSchema["psd"];
        /**
         * @description 邮箱地址
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108378202
         */
        email: RefSchema["email"];
        /**
         * @description 邮箱验证码，6位数字（测试：000000）
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-108378202
         */
        emailCode: RefSchema["code"];
      };

      response: {};
    };

    /**
     * 手机号注册
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-114326081
     */
    "/register/phone": {
      contentType: "application/json";
      params: never;

      data: {
        /**
         * @description 密码，6-20位
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-114326081
         */
        psd: RefSchema["psd"];
        /**
         * @description 手机号码
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-114326081
         */
        phone: RefSchema["phone"];
        /**
         * @description 短信验证码，6位数字（测试：000000）
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-114326081
         */
        smsCode: RefSchema["code"];
      };

      response: {};
    };

    /**
     * 发送手机短信验证码
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-109377885
     */
    "/send-code/sms": {
      contentType: "application/json";
      params: never;

      data: {
        /**
         * @description 手机号码
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-109377885
         */
        phone: RefSchema["phone"];
      };

      response: {};
    };

    /**
     * 发送邮箱验证码
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-114326083
     */
    "/send-code/email": {
      contentType: "application/json";
      params: never;

      data: {
        /**
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-114326083
         */
        email: RefSchema["email"];
      };

      response: {
        /**
         * @see https://www.apifox.cn/apidoc/shared-683015d2-654c-4aa1-82c8-98677933ff99/api-114326083
         */
        email: RefSchema["email"];
      };
    };
  };
};
