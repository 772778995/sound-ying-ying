import api from '@/src/api'
import localForage from '@/src/utils/localForage'

type Props = {
  // loginFormRef: Ref<FormInstance | null>
}

export default (props: Props) => {
  const {} = props
  const router = useRouter()

  const loginForm = ref({
    account: '',
    password: ''
  })

  const submitHandler = async () => {
    await api.post('/user/login')
  }

  return {
    loginForm,
    submitHandler
  }
}

