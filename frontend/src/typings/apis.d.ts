
/* eslint-disable */

export type Urls = {
  post: "api/phone/code" | "api/phone/login" | "api/phone/bind" | "api/weixin/callback" | "oauth/token" | "oauth/token" | "oauth/token" | "api/music-attach/abc" | "api/music-attach/upload/32" | "api/music-attach/sync" | "/api/music-attach/stream" | "api/musicals" | "api/musicals/check-name" | "api/schools" | "api/classgrade" | "api/students" | "api/schools/batch/del" | "api/teachers" | "api/school_admin" | "api/knowledges" | "api/permissions" | "api/roles" | "api/textbooks" | "api/textbook_directory" | "api/textbook_courses" | "api/import_account/download/student" | "api/import/school" | "api/import/classroom" | "api/import_account/student" | "api/import/student" | "api/v2/storage"
  get: "api/weixin/config" | "api/user/0/info" | "api/musicals" | "api/musicals/32" | "api/schools" | "api/schools/13" | "api/classgrade" | "api/classgrade/83" | "api/students" | "api/students/3182" | "api/teachers" | "api/teachers/3175" | "api/school_admin" | "api/school_admin/13" | "api/knowledges" | "api/permissions" | "api/permissions/1" | "api/roles" | "api/roles/5" | "api/textbooks" | "api/textbooks/1" | "api/textbook_courses/1" | "api/textbook_courses/1" | "api/import/tpl-down/student" | "api/import/tpl-down/school" | "api/import/tpl-down/classroom" | "api/async_job" | "api/async_job/23" | "api/exports/school" | "api/exports/classrooms" | "storage/public:MjAyMy8wMy8yOC9CRmJSWVFsdm15RlpvQ0FQNGdobDNJUndBcGpnTzhnY0FsRjJCT29McG5FTEk0V0JmUkNVT2hDak9pdVFSbTY5LnBuZw==" | "api/region/0" | "api/version" | "api/config" | "api/ad" | "api/public_notice"
  delete: "api/music-attach/delete/00eacda9-d36d-49c4-8c95-1132d03838df" | "api/musicals/2" | "api/musicals/delete" | "api/schools/14" | "api/classgrade/85" | "api/students/197986" | "api/teachers/3175" | "api/school_admin/197988" | "api/knowledges/23" | "api/permissions/5" | "api/roles/5" | "api/textbooks/1" | "api/textbook_directory/1" | "api/textbook_courses/3"
  put: "api/musicals/32" | "api/permissions/5" | "api/roles/5" | "api/textbooks/1" | "api/textbook_directory/1" | "api/textbook_courses/3" | "http://10.88.18.164:30000/storage/public:MjAyMy8wMy8yOC9ibDZMNWtuSHQ4c3VNcDNrN0Ztck5qUzFOdU4yS210bk00R3ZRT0lnejA2RktyblR0dm00bXlSRFkzQm5xalhDLnBuZw=="
  patch: "api/schools/14" | "api/classgrade/85" | "api/students/197987" | "api/teachers/197982" | "api/school_admin/197988" | "api/knowledges/23"
  all: Urls['post'] | Urls['get'] | Urls['delete'] | Urls['put'] | Urls['patch']
}


type ApiDetails = {
  
  post: {
    
    /**
     * 获取验证码
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-66850113
     */
    "api/phone/code": {
      contentType: "none"
      params: {
        /**
         * @description 手机号。请输入有效的手机号
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-66850113
         */
        'phone': string

      }

      data: never

      response: {

    }

    }

    /**
     * 手机号登录
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-66957560
     */
    "api/phone/login": {
      contentType: "multipart/form-data"
      params: never

      data: {
      /**
       * @description 手机号
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-66957560
       */
      'phone'?: string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-66957560
       */
      'code'?: string

    }

      response: {

    }

    }

    /**
     * 绑定手机号
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-66903441
     */
    "api/phone/bind": {
      contentType: "multipart/form-data"
      params: never

      data: {
      /**
       * @description 手机号
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-66903441
       */
      'phone'?: string
      /**
       * @description 验证码
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-66903441
       */
      'code'?: string

    }

      response: {

    }

    }

    /**
     * 发送登录请求
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-66831222
     */
    "api/weixin/callback": {
      contentType: "multipart/form-data"
      params: never

      data: {
      /**
       * @description 从微信接口获得的code
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-66831222
       */
      'code': string

    }

      response: {

    }

    }

    /**
     * 账号登录(管理员
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-67088747
     */
    "oauth/token": {
      contentType: "multipart/form-data"
      params: never

      data: {
      /**
       * @description 默认值
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-67088747
       */
      'grant_type': string
      /**
       * @description 默认值
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-67088747
       */
      'client_id': string
      /**
       * @description 默认值
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-67088747
       */
      'client_secret': string
      /**
       * @description 默认值
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-67088747
       */
      'scope': string
      /**
       * @description 用户名
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-67088747
       */
      'username': string
      /**
       * @description 密码
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-67088747
       */
      'password': string
      /**
       * @description hash密码识别标志。0否2是
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-67088747
       */
      'version': string

    }

      response: {

    }

    }

    /**
     * 账号登录(教师
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68767421
     */
    "oauth/token": {
      contentType: "multipart/form-data"
      params: never

      data: {
      /**
       * @description 默认值
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68767421
       */
      'grant_type': string
      /**
       * @description 默认值
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68767421
       */
      'client_id': string
      /**
       * @description 默认值
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68767421
       */
      'client_secret': string
      /**
       * @description 默认值
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68767421
       */
      'scope': string
      /**
       * @description 用户名
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68767421
       */
      'username': string
      /**
       * @description 密码
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68767421
       */
      'password': string
      /**
       * @description hash密码识别标志。0否2是
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68767421
       */
      'version': string

    }

      response: {

    }

    }

    /**
     * 刷新token
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-67750163
     */
    "oauth/token": {
      contentType: "multipart/form-data"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-67750163
       */
      'grant_type': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-67750163
       */
      'client_id': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-67750163
       */
      'client_secret': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-67750163
       */
      'scope': string
      /**
       * @description 从登录接口获得的refresh_token
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-67750163
       */
      'refresh_token': string

    }

      response: {

    }

    }

    /**
     * 读取abc格式
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-69946169
     */
    "api/music-attach/abc": {
      contentType: "multipart/form-data"
      params: never

      data: {
      /**
       * @description abc文件路径
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-69946169
       */
      'url': string

    }

      response: {

    }

    }

    /**
     * 上传音频
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-69200623
     */
    "api/music-attach/upload/32": {
      contentType: "multipart/form-data"
      params: never

      data: {
      /**
       * @description 文件
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-69200623
       */
      'file': never
      /**
       * @description 附件类型。1音频2男高3男中4男低5女高6女中7女低8伴唱9范唱
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-69200623
       */
      'audio_type': string

    }

      response: {

    }

    }

    /**
     * 同步音轨卡点信息
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-70123242
     */
    "api/music-attach/sync": {
      contentType: "application/x-www-form-urlencoded"
      params: never

      data: {
      /**
       * @description 曲谱id
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-70123242
       */
      'music_id': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-70123242
       */
      'audio_type': string
      /**
       * @description 卡点数据。前端传入时已经转json
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-70123242
       */
      'new_timeline': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-70123242
       */
      'file_path': string

    }

      response: {

    }

    }

    /**
     * 文件流上传
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-70434916
     */
    "/api/music-attach/stream": {
      contentType: "application/octet-stream"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 创建
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65200922
     */
    "api/musicals": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @description 谱例名。如：大鱼小鱼
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65200922
       */
      'name': string
      /**
       * @description 曲谱的基本信息。查看用
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65200922
       */
      'base_info': {

      }
      /**
       * @description 曲谱类型。简谱、高音谱、中音谱、
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65200922
       */
      'music_type': string
      /**
       * @description abc记谱法内容。
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65200922
       */
      'abc_json_val': string
      /**
       * @description 音频
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65200922
       */
      'music_attach_id': string

    }

      response: {

    }

    }

    /**
     * 重复谱名查询
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71068303
     */
    "api/musicals/check-name": {
      contentType: "multipart/form-data"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71068303
       */
      'keyword': string

    }

      response: {

    }

    }

    /**
     * 创建
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030802
     */
    "api/schools": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030802
       */
      'name': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030802
       */
      'region_code': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030802
       */
      'admin_level': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030802
       */
      'primary_school': boolean
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030802
       */
      'middle_school': boolean
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030802
       */
      'high_school': boolean
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030802
       */
      'bureau_id': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030802
       */
      'subjects': Array<
        number
      >

    }

      response: {

    }

    }

    /**
     * 添加
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65085435
     */
    "api/classgrade": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @description 学校id
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65085435
       */
      'school_id': number
      /**
       * @description 入学年份
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65085435
       */
      'enroll_year'?: integer | null
      /**
       * @description 入学年级
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65085435
       */
      'enroll_grade'?: integer | null
      /**
       * @description 当前年级。根据学校学段自动生成对应年级。小1-6，中7-9，
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65085435
       */
      'current_grade': number
      /**
       * @description 班级序号
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65085435
       */
      'seq': number
      /**
       * @description 任课教师id
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65085435
       */
      'teacher_ids': Array<
        string
      >

    }

      response: {

    }

    }

    /**
     * 创建
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65099826
     */
    "api/students": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65099826
       */
      'school_id': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65099826
       */
      'number_in_class': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65099826
       */
      'class_grade_id': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65099826
       */
      'account': {
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65099826
         */
        'login_name': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65099826
         */
        'realname': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65099826
         */
        'mobile': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65099826
         */
        'serial': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65099826
         */
        'pass1': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65099826
         */
        'pass2': string

      }

    }

      response: {

    }

    }

    /**
     * 批量删除
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-66593121
     */
    "api/schools/batch/del": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @description 批量删除
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-66593121
       */
      'ids': Array<
        string
      >

    }

      response: {

    }

    }

    /**
     * 创建
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65138849
     */
    "api/teachers": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65138849
       */
      'school_id': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65138849
       */
      'subject_id': number
      /**
       * @description false
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65138849
       */
      'is_supervisor': boolean
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65138849
       */
      'account': {
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65138849
         */
        'realname': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65138849
         */
        'login_name': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65138849
         */
        'serial': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65138849
         */
        'mobile': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65138849
         */
        'pass1': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65138849
         */
        'pass2': string

      }

    }

      response: {

    }

    }

    /**
     * 创建
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146129
     */
    "api/school_admin": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146129
       */
      'school_id': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146129
       */
      'subject_id': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146129
       */
      'is_supervisor': boolean
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146129
       */
      'account': {
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146129
         */
        'realname': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146129
         */
        'login_name': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146129
         */
        'serial': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146129
         */
        'mobile': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146129
         */
        'pass1': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146129
         */
        'pass2': string

      }

    }

      response: {

    }

    }

    /**
     * 创建
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65159824
     */
    "api/knowledges": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @description 父级id
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65159824
       */
      'pid': number
      /**
       * @description 知识点
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65159824
       */
      'knowledge_name': string

    }

      response: {

    }

    }

    /**
     * 添加
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65762978
     */
    "api/permissions": {
      contentType: "multipart/form-data"
      params: never

      data: {
      /**
       * @description 权限名
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65762978
       */
      'name'?: string
      /**
       * @description 备注
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65762978
       */
      'display_name'?: string
      /**
       * @description 认证分组
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65762978
       */
      'guard_name'?: string

    }

      response: {

    }

    }

    /**
     * 新建
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65779183
     */
    "api/roles": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65779183
       */
      'name': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65779183
       */
      'permissions': Array<
        number
      >
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65779183
       */
      'display_name': string

    }

      response: {

    }

    }

    /**
     * 创建教材
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65232449
     */
    "api/textbooks": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @description 出版社
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65232449
       */
      'text_publisher': string
      /**
       * @description 学科id
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65232449
       */
      'subject_id': string
      /**
       * @description 适用年级
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65232449
       */
      'text_classgrade': string
      /**
       * @description 上下册
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65232449
       */
      'text_volume': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65232449
       */
      'cover_attach_id': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65232449
       */
      'book_attach_id': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65232449
       */
      'is_down': boolean

    }

      response: {

    }

    }

    /**
     * 添加
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65267321
     */
    "api/textbook_directory": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65267321
       */
      'pid': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65267321
       */
      'textbook_id': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65267321
       */
      'order_num': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65267321
       */
      'direct_name': string

    }

      response: {

    }

    }

    /**
     * 添加
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65293333
     */
    "api/textbook_courses": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @description 教材id
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65293333
       */
      'textbook_directory_id': number
      /**
       * @description 附件id
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65293333
       */
      'attach_id': string

    }

      response: {

    }

    }

    /**
     * 账号导入
     * @status deprecated
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68954539
     */
    "api/import_account/download/student": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 导入学校
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65506093
     */
    "api/import/school": {
      contentType: "multipart/form-data"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65506093
       */
      'file'?: never

    }

      response: {

    }

    }

    /**
     * 导入班级
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65696643
     */
    "api/import/classroom": {
      contentType: "multipart/form-data"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65696643
       */
      'file'?: never

    }

      response: {

    }

    }

    /**
     * 导入学生
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65396263
     */
    "api/import_account/student": {
      contentType: "multipart/form-data"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65396263
       */
      'file'?: never

    }

      response: {

    }

    }

    /**
     * 导入学生 Copy
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71059163
     */
    "api/import/student": {
      contentType: "multipart/form-data"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71059163
       */
      'file'?: never

    }

      response: {

    }

    }

    /**
     * 提交上传文件数据，获取上传文件授权临时连接
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003388
     */
    "api/v2/storage": {
      contentType: "multipart/form-data"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003388
       */
      'filename': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003388
       */
      'hash': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003388
       */
      'mime_type': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003388
       */
      'size': string
      /**
       * @description 参数名storage[channel]
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003388
       */
      'storage': string

    }

      response: {
      /**
       * @description 可以上传文件的链接
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003388
       */
      'uri': string
      /**
       * @description 提交方法
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003388
       */
      'method': string
      /**
       * @description 需要传递的header参数
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003388
       */
      'headers': {
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003388
         */
        'Authorization': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003388
         */
        'x-plus-storage-hash': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003388
         */
        'x-plus-storage-size': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003388
         */
        'x-plus-storage-mime-type': string

      }
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003388
       */
      'form': never
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003388
       */
      'file_key': never
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003388
       */
      'node': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003388
       */
      'post_policy': never

    }

    }

  }


  get: {
    
    /**
     * 微信登录配置
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-66803719
     */
    "api/weixin/config": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 账号信息
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64455675
     */
    "api/user/0/info": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 列表
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
     */
    "api/musicals": {
      contentType: "none"
      params: {
        /**
         * @description 页数
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
         */
        'page'?: number
        /**
         * @description 条数
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
         */
        'page_size'?: number
        /**
         * @description 搜索字段
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
         */
        'fu_name'?: string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
         */
        'fu_music_type'?: string

      }

      data: never

      response: {
      /**
       * @description 数组
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
       */
      'data': Array<
        {
          /**
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
           */
          'id': number
          /**
           * @description 来源用户
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
           */
          'user_id': number
          /**
           * @description 曲谱名
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
           */
          'name': string
          /**
           * @description 曲谱基础信息
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
           */
          'base_info': {
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
             */
            'name': string
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
             */
            'base_info': never
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
             */
            'vocal_type': string
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
             */
            'music_type': string
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
             */
            'abc_json_val': string
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
             */
            'aaa'?: number
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
             */
            'error_code'?: number
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
             */
            'error_msg'?: string

          }
          /**
           * @description 声部类型
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
           */
          'vocal_type'?: string | null
          /**
           * @description 曲谱类型
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
           */
          'music_type': string
          /**
           * @description abc格式
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
           */
          'abc_json_val': string
          /**
           * @description 谱音同步
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
           */
          'sync_json_val': never
          /**
           * @description 音频文件
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
           */
          'music_attach_id': never
          /**
           * @description 同步文件
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
           */
          'sync_attach_id': never
          /**
           * @description 跟唱文件
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
           */
          'sing_attach_id': never
          /**
           * @description 是否谱音同步
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
           */
          'is_score_sync': number
          /**
           * @description 是否跟唱同步
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
           */
          'is_sing_sync': number
          /**
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
           */
          'created_at': string
          /**
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
           */
          'updated_at': string
          /**
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
           */
          'music': never

        }
      >
      /**
       * @description 链接信息
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
       */
      'links': {
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
         */
        'first': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
         */
        'last': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
         */
        'prev': never
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
         */
        'next': never

      }
      /**
       * @description 分页信息
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
       */
      'meta': {
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
         */
        'current_page': number
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
         */
        'from': number
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
         */
        'last_page': number
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
         */
        'links': Array<
          {
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
             */
            'url'?: string | null
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
             */
            'label': string
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
             */
            'active': boolean

          }
        >
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
         */
        'path': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
         */
        'per_page': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
         */
        'to': number
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-64787089
         */
        'total': number

      }

    }

    }

    /**
     * 信息
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65227872
     */
    "api/musicals/32": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 列表
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
     */
    "api/schools": {
      contentType: "none"
      params: {
        /**
         * @description 分页
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
         */
        'page'?: string
        /**
         * @description 分页数量
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
         */
        'page_size'?: string
        /**
         * @description 搜索
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
         */
        'fu_name'?: string
        /**
         * @description 省市县id
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
         */
        'region_id'?: number

      }

      data: never

      response: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
       */
      'data': Array<
        {
          /**
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
           */
          'id'?: number
          /**
           * @description 学校名
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
           */
          'name'?: string
          /**
           * @description 省市县代码
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
           */
          'region_code'?: string
          /**
           * @description 学校唯一id
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
           */
          'school_code'?: string
          /**
           * @description 区代理
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
           */
          'bureau_id'?: number
          /**
           * @description 管理层级
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
           */
          'admin_level'?: number
          /**
           * @description 是否小学
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
           */
          'primary_school'?: number
          /**
           * @description 是否中学
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
           */
          'middle_school'?: number
          /**
           * @description 是否高中
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
           */
          'high_school'?: number
          /**
           * @description 学生总数
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
           */
          'students_count'?: number
          /**
           * @description 教师总数
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
           */
          'teachers_count'?: number
          /**
           * @description 校管总数
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
           */
          'school_admins_count'?: number
          /**
           * @description 班级总数
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
           */
          'class_grades_count'?: number
          /**
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
           */
          'is_primary_school'?: string
          /**
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
           */
          'is_middle_school'?: string
          /**
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
           */
          'is_high_school'?: string
          /**
           * @description 省市县地区
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
           */
          'district_division'?: {
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'id': number
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'code': string
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'name': string
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'short_name': string
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'parent_id': number
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'list_order': number
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'level': number
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'l1_name': string
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'l1_id': number
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'l2_name': string
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'l2_id': number
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'l3_name': never
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'l3_id': never

          }
          /**
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
           */
          'bureau'?: {
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'id': number
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'name': string
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'admin_scope': string
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'created_at': never
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'updated_at': never

          }
          /**
           * @description 学科
           * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
           */
          'subjects'?: Array<
            {
              /**
               * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
               */
              'id': number
              /**
               * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
               */
              'name': string
              /**
               * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
               */
              'slug': string
              /**
               * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
               */
              'question_type'?: array | null
              /**
               * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
               */
              'competences': number
              /**
               * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
               */
              'knowledge_points': number
              /**
               * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
               */
              'teaching_materials': number
              /**
               * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
               */
              'logo': string
              /**
               * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
               */
              'icon': string
              /**
               * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
               */
              'laravel_through_key': number

            }
          >

        }
      >
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
       */
      'links': {
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
         */
        'first': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
         */
        'last': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
         */
        'prev': never
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
         */
        'next': never

      }
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
       */
      'meta': {
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
         */
        'current_page': number
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
         */
        'from': number
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
         */
        'last_page': number
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
         */
        'links': Array<
          {
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'url'?: string | null
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'label': string
            /**
             * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
             */
            'active': boolean

          }
        >
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
         */
        'path': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
         */
        'per_page': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
         */
        'to': number
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030341
         */
        'total': number

      }

    }

    }

    /**
     * 信息
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65030716
     */
    "api/schools/13": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 列表
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65070260
     */
    "api/classgrade": {
      contentType: "none"
      params: {
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65070260
         */
        'with_detail'?: number
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65070260
         */
        'fb_school_id'?: string

      }

      data: never

      response: {

    }

    }

    /**
     * 信息
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65071129
     */
    "api/classgrade/83": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 列表
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65096031
     */
    "api/students": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 信息
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65096861
     */
    "api/students/3182": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 列表
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65125691
     */
    "api/teachers": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 信息
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65136961
     */
    "api/teachers/3175": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 列表
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146127
     */
    "api/school_admin": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 信息
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146128
     */
    "api/school_admin/13": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 列表
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65157629
     */
    "api/knowledges": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 列表
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65755898
     */
    "api/permissions": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 展示
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65771087
     */
    "api/permissions/1": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 列表
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65778875
     */
    "api/roles": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 展示
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65795041
     */
    "api/roles/5": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 列表
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65232257
     */
    "api/textbooks": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 展示
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65265139
     */
    "api/textbooks/1": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 目录信息
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65271415
     */
    "api/textbook_courses/1": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 展示
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65321601
     */
    "api/textbook_courses/1": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 学生导入模版
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68668890
     */
    "api/import/tpl-down/student": {
      contentType: "none"
      params: {
        /**
         * @description 模版类型。学校school，班级calssroom，学生student
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68668890
         */
        'type'?: string

      }

      data: never

      response: {

    }

    }

    /**
     * 学校导入模版
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-69175110
     */
    "api/import/tpl-down/school": {
      contentType: "none"
      params: {
        /**
         * @description 模版类型。学校school，班级calssroom，学生student
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-69175110
         */
        'type'?: string

      }

      data: never

      response: {

    }

    }

    /**
     * 班级导入模版
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-69009565
     */
    "api/import/tpl-down/classroom": {
      contentType: "none"
      params: {
        /**
         * @description 模版类型。学校school，班级calssroom，学生student
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-69009565
         */
        'type'?: string

      }

      data: never

      response: {

    }

    }

    /**
     * 异步任务查看
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65412693
     */
    "api/async_job": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 导入任务结果
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65578433
     */
    "api/async_job/23": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 导出学校
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-67476253
     */
    "api/exports/school": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 导出班级
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68028910
     */
    "api/exports/classrooms": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 读取文件
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71298073
     */
    "storage/public:MjAyMy8wMy8yOC9CRmJSWVFsdm15RlpvQ0FQNGdobDNJUndBcGpnTzhnY0FsRjJCT29McG5FTEk0V0JmUkNVT2hDak9pdVFSbTY5LnBuZw==": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 省市县
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65198123
     */
    "api/region/0": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 版本
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65326406
     */
    "api/version": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 配置信息
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-66473212
     */
    "api/config": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 通告
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68028907
     */
    "api/ad": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 公告
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68029370
     */
    "api/public_notice": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

  }


  delete: {
    
    /**
     * 删除音频
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-69969818
     */
    "api/music-attach/delete/00eacda9-d36d-49c4-8c95-1132d03838df": {
      contentType: "multipart/form-data"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 删除
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65207024
     */
    "api/musicals/2": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 批量删除
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-67039181
     */
    "api/musicals/delete": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @description 需要删除的id数组
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-67039181
       */
      'ids': Array<
        number
      >

    }

      response: {

    }

    }

    /**
     * 删除
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65063250
     */
    "api/schools/14": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 删除
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65092492
     */
    "api/classgrade/85": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 删除
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65111776
     */
    "api/students/197986": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 删除
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65144603
     */
    "api/teachers/3175": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 删除
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146131
     */
    "api/school_admin/197988": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 删除
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65162977
     */
    "api/knowledges/23": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 删除
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65778029
     */
    "api/permissions/5": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65778029
       */
      'name': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65778029
       */
      'display_name': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65778029
       */
      'guard_name'?: string | null

    }

      response: {

    }

    }

    /**
     * 删除
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65795675
     */
    "api/roles/5": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 删除
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65267288
     */
    "api/textbooks/1": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 删除
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65269838
     */
    "api/textbook_directory/1": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 删除
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65321203
     */
    "api/textbook_courses/3": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

  }


  put: {
    
    /**
     * 更新
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68802126
     */
    "api/musicals/32": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @description 谱例名。如：大鱼小鱼
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68802126
       */
      'name': string
      /**
       * @description 曲谱的基本信息。查看用
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68802126
       */
      'base_info': {

      }
      /**
       * @description 声部类型。
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68802126
       */
      'vocal_type': string
      /**
       * @description 曲谱类型。简谱、高音谱、中音谱、
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68802126
       */
      'music_type': string
      /**
       * @description abc记谱法内容。
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-68802126
       */
      'abc_json_val': string

    }

      response: {

    }

    }

    /**
     * 修改
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65774469
     */
    "api/permissions/5": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65774469
       */
      'name': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65774469
       */
      'display_name': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65774469
       */
      'guard_name'?: string | null

    }

      response: {

    }

    }

    /**
     * 修改
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65785040
     */
    "api/roles/5": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65785040
       */
      'name': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65785040
       */
      'permissions': Array<
        number
      >

    }

      response: {

    }

    }

    /**
     * 修改教材
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65309247
     */
    "api/textbooks/1": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @description 出版社
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65309247
       */
      'text_publisher': string
      /**
       * @description 学科id
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65309247
       */
      'subject_id': string
      /**
       * @description 适用年级
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65309247
       */
      'text_classgrade': string
      /**
       * @description 上下册
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65309247
       */
      'text_volume': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65309247
       */
      'cover_attach_id': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65309247
       */
      'book_attach_id': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65309247
       */
      'is_down': boolean

    }

      response: {

    }

    }

    /**
     * 修改
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65268736
     */
    "api/textbook_directory/1": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65268736
       */
      'pid': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65268736
       */
      'textbook_id': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65268736
       */
      'order_num': string
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65268736
       */
      'direct_name': string

    }

      response: {

    }

    }

    /**
     * 修改
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65318531
     */
    "api/textbook_courses/3": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @description 教材id
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65318531
       */
      'textbook_directory_id': number
      /**
       * @description 附件id
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65318531
       */
      'attach_id': string

    }

      response: {

    }

    }

    /**
     * 临时上传文件接口
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003899
     */
    "http://10.88.18.164:30000/storage/public:MjAyMy8wMy8yOC9ibDZMNWtuSHQ4c3VNcDNrN0Ztck5qUzFOdU4yS210bk00R3ZRT0lnejA2RktyblR0dm00bXlSRFkzQm5xalhDLnBuZw==": {
      contentType: "application/octet-stream"
      params: {
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003899
         */
        'expires'?: string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-71003899
         */
        'signature'?: string

      }

      data: never

      response: {

    }

    }

  }


  patch: {
    
    /**
     * 修改
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65064492
     */
    "api/schools/14": {
      contentType: "none"
      params: never

      data: never

      response: {

    }

    }

    /**
     * 修改
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65090281
     */
    "api/classgrade/85": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @description 学校id
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65090281
       */
      'school_id': number
      /**
       * @description 入学年份
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65090281
       */
      'enroll_year'?: integer | null
      /**
       * @description 入学年级
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65090281
       */
      'enroll_grade': number
      /**
       * @description 当前年级。根据学校学段自动生成对应年级。小1-6，中7-9，
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65090281
       */
      'current_grade': number
      /**
       * @description 班级序号
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65090281
       */
      'seq': number
      /**
       * @description 任课教师id
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65090281
       */
      'teacher_ids': Array<
        string
      >

    }

      response: {

    }

    }

    /**
     * 更新
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65143481
     */
    "api/students/197987": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65143481
       */
      'school_id': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65143481
       */
      'number_in_class': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65143481
       */
      'class_grade_id': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65143481
       */
      'account': {
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65143481
         */
        'login_name': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65143481
         */
        'realname': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65143481
         */
        'mobile': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65143481
         */
        'serial': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65143481
         */
        'pass1': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65143481
         */
        'pass2': string

      }

    }

      response: {

    }

    }

    /**
     * 更新
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65142759
     */
    "api/teachers/197982": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65142759
       */
      'school_id': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65142759
       */
      'subject_id': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65142759
       */
      'is_supervisor': boolean
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65142759
       */
      'account': {
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65142759
         */
        'realname': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65142759
         */
        'login_name': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65142759
         */
        'serial': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65142759
         */
        'mobile': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65142759
         */
        'pass1': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65142759
         */
        'pass2': string

      }

    }

      response: {

    }

    }

    /**
     * 更新
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146130
     */
    "api/school_admin/197988": {
      contentType: "application/json"
      params: never

      data: {
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146130
       */
      'school_id': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146130
       */
      'subject_id': number
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146130
       */
      'is_supervisor': boolean
      /**
       * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146130
       */
      'account': {
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146130
         */
        'realname': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146130
         */
        'login_name': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146130
         */
        'serial': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146130
         */
        'mobile': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146130
         */
        'pass1': string
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65146130
         */
        'pass2': string

      }

    }

      response: {

    }

    }

    /**
     * 修改
     * @status developing
     * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65165612
     */
    "api/knowledges/23": {
      contentType: "none"
      params: {
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65165612
         */
        'pid'?: number
        /**
         * @see https://www.apifox.cn/apidoc/shared-581d08a5-5c61-4d96-87bf-660ed79e53be/api-65165612
         */
        'knowledge_name': string

      }

      data: never

      response: {

    }

    }

  }

}

