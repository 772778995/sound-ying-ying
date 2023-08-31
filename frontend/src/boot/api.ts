/* eslint-disable @typescript-eslint/no-explicit-any */
import { boot } from 'quasar/wrappers'
import api from '@/src/api'

export default boot(({ app }) => {
  app.config.globalProperties.$api = api
})

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: typeof api
  }
}

