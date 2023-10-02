import _Axios from 'axios'
import { AxiosStatic } from '@/src/typings/axios'
import throwError from '../utils/throwError'
import { Notify } from 'quasar'

const Axios = _Axios as AxiosStatic
const api = Axios.create({ baseURL: 'http://127.0.0.1:54088/api' })

export const reqs = ref(0)

api.interceptors.request.use(config => {
  reqs.value++
  return config
})

api.interceptors.response.use(
  config => {
    reqs.value--
    const msgType = {
      positive: 'success',
      error: 'negative',
      warn: 'warning',
      info: 'info'
    }[config.data?.type + '']
    if (msgType === 'negative') throwError(config.data.msg)
    if (msgType) {
      Notify.create({
        type: msgType,
        message: config.data.msg
      })
    }
    return config.data.data
  },
  err => {
    reqs.value--
    const code = err.code
    const msg = err.message
    const errMsg = `${code}：${msg}`
    throwError(errMsg)
    throw new Error(errMsg)
  }
)

export default api

declare module '@/src/typings/axios' {
  // export interface AxiosResponse<T = any, D = any> {
  //   data: T
  //   status: number
  //   statusText: string
  //   headers: RawAxiosResponseHeaders | AxiosResponseHeaders
  //   config: AxiosRequestConfig<D>
  //   request?: any
  // }
  export type AxiosResponse<T> = T
}

