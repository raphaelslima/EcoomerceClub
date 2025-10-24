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

const LoginPage = () => {
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
            <CustomInputComponent placeholder="Digite seu email" />
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Senha</p>
            <CustomInputComponent placeholder="Digite sua senha" />
          </LoginInputContainer>
          <CustomButtonComponent startIcon={<FiLogIn size={18} />}>
            Entrar
          </CustomButtonComponent>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
