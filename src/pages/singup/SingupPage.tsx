import { FiLogIn } from 'react-icons/fi'
import validator from 'validator'
import CustomButtonComponent from '../../components/customButton/CustomButtonComponent'
import CustomInputComponent from '../../components/customInput/CustomInputComponent'
import Header from '../../components/header/HeaderComponent'
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer
} from './singupStyle'
import { useForm } from 'react-hook-form'
import InputErrorMsgComponent from '../../components/inputErrorMsg/InputErrorMsgComponent'

interface SingupForm {
  fisrtName: string
  lastName: string
  email: string
  password: string
  passwordConfirm: string
}

const SingupPage = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit
  } = useForm<SingupForm>()

  const handleSubmitPress = (data: SingupForm) => {
    console.log(data)
  }

  const watchPassword = watch('password')

  return (
    <>
      <Header />
      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie sua conta</SignUpHeadline>

          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInputComponent
              hasError={!!errors?.fisrtName}
              placeholder="Digite seu nome"
              {...register('fisrtName', {
                required: true
              })}
            />

            {errors?.fisrtName?.type === 'required' && (
              <InputErrorMsgComponent>
                O nome é obrigatório
              </InputErrorMsgComponent>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInputComponent
              hasError={!!errors?.lastName}
              placeholder="Digite seu sobrenome"
              {...register('lastName', {
                required: true
              })}
            />

            {errors?.lastName?.type === 'required' && (
              <InputErrorMsgComponent>
                O Sobrenome é obrigatório
              </InputErrorMsgComponent>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
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
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInputComponent
              hasError={!!errors?.password}
              placeholder="Digite sua senha"
              type="password"
              {...register('password', {
                required: true
              })}
            />

            {errors?.password?.type === 'required' && (
              <InputErrorMsgComponent>
                A senha é obrigatório
              </InputErrorMsgComponent>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirme sua senha</p>
            <CustomInputComponent
              hasError={!!errors?.passwordConfirm}
              placeholder="Confirme sua senha"
              type="password"
              {...register('passwordConfirm', {
                required: true,
                validate: (value) => {
                  return value === watchPassword
                }
              })}
            />

            {errors?.passwordConfirm?.type === 'required' && (
              <InputErrorMsgComponent>
                A confirmação de senha é obrigatório
              </InputErrorMsgComponent>
            )}

            {errors?.passwordConfirm?.type === 'validate' && (
              <InputErrorMsgComponent>
                Senhas não conferem
              </InputErrorMsgComponent>
            )}
          </SignUpInputContainer>

          <CustomButtonComponent
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}>
            Criar conta
          </CustomButtonComponent>
        </SignUpContent>
      </SignUpContainer>
    </>
  )
}

export default SingupPage
