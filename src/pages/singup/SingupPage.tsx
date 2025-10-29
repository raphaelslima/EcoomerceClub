import { FiLogIn } from 'react-icons/fi'
import validator from 'validator'
import {
  AuthError,
  AuthErrorCodes,
  createUserWithEmailAndPassword
} from 'firebase/auth'
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
import { auth, db } from '../../config/firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/userContext'
import { useNavigate } from 'react-router-dom'
import LoadingComponent from '../../components/loading/LoadingComponent'

interface SingupForm {
  fisrtName: string
  lastName: string
  email: string
  password: string
  passwordConfirm: string
}

const SingupPage = () => {
  const { isAuthentication } = useContext(UserContext)
  const [isLoading, setIsloading] = useState(false)

  const navigate = useNavigate()

  const {
    register,
    watch,
    formState: { errors },
    setError,
    handleSubmit
  } = useForm<SingupForm>()

  const handleSubmitPress = async (data: SingupForm) => {
    try {
      setIsloading(true)
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        firstName: data.fisrtName,
        lastName: data.lastName,
        email: userCredentials.user.email,
        provider: 'firebase'
      })
      setIsloading(false)
    } catch (error) {
      const _error = error as AuthError

      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return setError('email', {
          type: 'alreadyInUse'
        })
      }
      setIsloading(false)
    }
  }

  const watchPassword = watch('password')

  useEffect(() => {
    if (isAuthentication) {
      navigate('/')
    }
  }, [isAuthentication])

  return (
    <>
      <Header />

      {isLoading && <LoadingComponent />}

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

            {errors?.email?.type === 'alreadyInUse' && (
              <InputErrorMsgComponent>Email já existe</InputErrorMsgComponent>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInputComponent
              hasError={!!errors?.password}
              placeholder="Digite sua senha"
              type="password"
              {...register('password', {
                required: true,
                minLength: 4
              })}
            />

            {errors?.password?.type === 'required' && (
              <InputErrorMsgComponent>
                A senha é obrigatório
              </InputErrorMsgComponent>
            )}

            {errors?.password?.type === 'minLength' && (
              <InputErrorMsgComponent>
                A senha precisa ter mais de 3 caracteres
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
                minLength: 4,
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

            {errors?.passwordConfirm?.type === 'minLength' && (
              <InputErrorMsgComponent>
                A senha precisa ter mais de 3 caracteres
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
