import api from '@/src/api'
import useRequest from '@/src/hooks/useRequest'
import useSendEmail from '@/src/hooks/useSendEmail'
import { ApiDetails } from '@/src/typings/apis'

type RegisterForm = //
  ApiDetails['post']['/register/email']['data'] &
    ApiDetails['post']['/register/phone']['data']

// TODO 手机号短信验证码注册
export default () => {
  const registerForm: Ref<RegisterForm> = ref({
    phone: '13790867170',
    email: '772778995@qq.com',
    emailCode: '000000',
    smsCode: '000000',
    psd: '123456'
  })

  const { leftSeconds, sendEmailCode, isSendEmailCodeLoading } = useSendEmail()
  const sendEmailCodeHandler = () => {
    sendEmailCode(registerForm.value.email)
  }

  const [register, isRegisterLoading] = useRequest(() =>
    api.post('/register/email', registerForm.value)
  )

  const registerHandler = async () => {
    await register()
  }

  return {
    leftSeconds,
    sendEmailCodeHandler,
    isSendEmailCodeLoading,

    registerForm,
    isRegisterLoading,
    registerHandler
  }
}
