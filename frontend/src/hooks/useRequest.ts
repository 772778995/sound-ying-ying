const useRequest = <F extends () => Promise<any>>(fn: F) => {
  const isLoading = ref(false)
  const isError = ref(false)
  const errMsg = ref('')
  const request = () => {
    isLoading.value = true
    isError.value = false
    errMsg.value = ''
    return fn()
      .catch((err: Error) => {
        isError.value = true
        errMsg.value = err.message
      })
      .finally(() => isLoading.value = false)
  }
  return [
    /** 发起请求 */
    request,
    /** 正在请求中…… */
    isLoading,
    /** 出现异常 */
    isError
  ] as const
}

export default useRequest
