import { getLocalForage } from 'can-can-word-bug'

export default getLocalForage<{
  /** 上一次发送邮件验证码时间戳 */
  lastSendEmailCodeTime: number
}>()

