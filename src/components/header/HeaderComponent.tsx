import { BsCart3 } from 'react-icons/bs'

import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './headerStyle'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebaseConfig'
import { useContext } from 'react'
import { UserContext } from '../../contexts/userContext'

const Header = () => {
  const navigate = useNavigate()

  const { isAuthentication } = useContext(UserContext)

  const handleNavigateHomePage = () => {
    navigate('/')
  }

  const handleNavigateLoginPage = () => {
    navigate('/login')
  }

  const handlenavidateSingupPage = () => {
    navigate('/singup')
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleNavigateHomePage}>CLUB CLOTHING</HeaderTitle>
      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        {!isAuthentication && (
          <>
            <HeaderItem onClick={handleNavigateLoginPage}>Login</HeaderItem>
            <HeaderItem onClick={handlenavidateSingupPage}>
              Criar conta
            </HeaderItem>
          </>
        )}
        {isAuthentication && (
          <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
        )}
        <HeaderItem>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
