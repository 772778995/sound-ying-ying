import api from '@/src/api'
import useRequest from '@/src/hooks/useRequest'
import { ApiDetails } from '@/src/typings/apis'

export default () => {
  const router = useRouter()

  const loginForm = ref({
    phone: '13790867170',
    smsCode: '000000',
    psd: 'wuhaochaoshuai'
  } as ApiDetails['post']['/user/login']['data'])

  const [login, isLoginLoading] = useRequest(() => api.post('/user/login', loginForm.value))
  const loginHandler = async () => {
    await login()
    localStorage.setItem('token', '6'.repeat(32))
    // router.replace({ name: '首页' })
  }

  return {
    loginForm,
    isLoginLoading,
    loginHandler
  }
}

