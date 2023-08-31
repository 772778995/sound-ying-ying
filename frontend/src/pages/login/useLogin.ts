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

  const submit = async () => {
    await localForage.setItem('token', '6'.repeat(32))
    router.push('/')
  }

  return {
    loginForm,
    submit
  }
}

