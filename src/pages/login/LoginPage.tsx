import { useForm } from 'react-hook-form'
import validator from 'validator'
import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import CustomButtonComponent from '../../components/customButton/CustomButtonComponent'

import Header from '../../components/header/HeaderComponent'
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './login'
import CustomInputComponent from '../../components/customInput/CustomInputComponent'
import InputErrorMsgComponent from '../../components/inputErrorMsg/InputErrorMsgComponent'
import { AuthError, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebaseConfig'

interface loginForm {
  email: string
  password: string
}

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError
  } = useForm<loginForm>()

  const handleSubmitPress = async (data: loginForm) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      console.log(userCredentials)
    } catch (error) {
      const _error = error as AuthError
      console.log('Firebase error code:', _error.code)

      if (_error.code === 'auth/invalid-login-credentials') {
        setError('email', {
          type: 'invalidCredentials'
        })
        setError('password', {
          type: 'invalidCredentials'
        })

        return 0
      }
    }
  }

  return (
    <>
      <Header />

      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com sua conta</LoginHeadline>
          <CustomButtonComponent startIcon={<BsGoogle size={18} />}>
            Entrar com o Google
          </CustomButtonComponent>
          <LoginSubtitle>Ou entre com seu email</LoginSubtitle>
          <LoginInputContainer>
            <p>Email</p>
            <CustomInputComponent
              hasError={!!errors?.email}
              placeholder="Digite seu email"
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />

            {errors?.email?.type === 'required' && (
              <InputErrorMsgComponent>
                O email é obrigatório
              </InputErrorMsgComponent>
            )}

            {errors?.email?.type === 'validate' && (
              <InputErrorMsgComponent>
                Digite um email válido
              </InputErrorMsgComponent>
            )}

            {errors?.email?.type === 'invalidCredentials' && (
              <InputErrorMsgComponent>
                A email ou senha estão incorretos
              </InputErrorMsgComponent>
            )}
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Senha</p>
            <CustomInputComponent
              type="password"
              hasError={!!errors?.password}
              placeholder="Digite sua senha"
              {...register('password', {
                required: true
              })}
            />

            {errors?.password?.type === 'required' && (
              <InputErrorMsgComponent>
                A senha é obrigatória
              </InputErrorMsgComponent>
            )}

            {errors?.password?.type === 'invalidCredentials' && (
              <InputErrorMsgComponent>
                A email ou senha estão incorretos
              </InputErrorMsgComponent>
            )}
          </LoginInputContainer>
          <CustomButtonComponent
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}>
            Entrar
          </CustomButtonComponent>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
