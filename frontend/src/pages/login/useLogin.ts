import api from '@/src/api'
import useRequest from '@/src/hooks/useRequest'
import { ApiDetails } from '@/src/typings/apis'

type LoginForm = //
  ApiDetails['post']['/login/email/code']['data'] &
    ApiDetails['post']['/login/email/psd']['data'] &
    ApiDetails['post']['/login/phone/psd']['data'] &
    ApiDetails['post']['/login/phone/code']['data']

// TODO 邮箱密码登录
// TODO 手机号短信验证码登录
// TODO 手机号密码登录
export default () => {
  const loginForm: Ref<LoginForm> = ref({
    phone: '13790867170',
    email: '772778995@qq.com',
    emailCode: '000000',
    smsCode: '000000',
    psd: '123456'
  })

  const [login, isLoginLoading] = useRequest(() =>
    api.post('/login/email/code', loginForm.value)
  )

  const loginHandler = async () => {
    await login()
    localStorage.setItem('token', '6'.repeat(32))
  }

  return {
    loginForm,
    isLoginLoading,
    loginHandler
  }
}

