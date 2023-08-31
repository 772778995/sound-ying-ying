import _Axios from 'axios'
import { AxiosStatic } from '@/src/typings/axios'
import i18n from '@/src/i18n'
import { Notify } from 'quasar'

const t = i18n.global.t
const Axios = _Axios as AxiosStatic
const api = Axios.create({ baseURL: 'http://10.88.18.164:30000/', timeout: 1000 })

export const reqs = ref(0)

api.interceptors.request.use(config => {
  reqs.value++
  return config
})

api.interceptors.response.use(
  config => {
    reqs.value--
    if (config.config.filterResponse === false) return config
    return config.data.data
  },
  err => {
    reqs.value--
    const errMsg =
      err.response?.data?.error_msg || err.response?.data?.message || t('request-error')
    Notify.create({
      position: 'top-right',
      type: 'negative',
      message: errMsg
    })
    throw new Error(errMsg)
  }
)

declare module '@/src/typings/axios' {
  export interface AxiosRequestConfig {
    /**
     * 是否过滤响应数据
     * @default true
     * @example
     * api
     *  .get('/api', { filterResponse: false })
     *  .then(res => {
     *    // 如果 filterResponse 为 false 则返回的数据为原始数据
     *    console.log(res.data.data)
     *    // 默认情况下返回的数据为过滤后的数据
     *    console.log(res)
     *  })
     */
    filterResponse?: boolean
  }
}

export default api

