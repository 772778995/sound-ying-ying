import { getLocalForage } from 'can-can-word-bug'

export default getLocalForage<{
  /** 上一次发送短信时间戳 */
  lastSendSmsCodeTime: number
}>()

