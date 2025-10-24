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

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const handleSubmitPress = (data: any) => {
    console.log(data)
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
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Senha</p>
            <CustomInputComponent
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
