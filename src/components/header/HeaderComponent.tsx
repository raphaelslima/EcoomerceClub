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
import { CartContext } from '../../contexts/cartContext'

const Header = () => {
  const navigate = useNavigate()

  const { isAuthentication } = useContext(UserContext)
  const { toggleCart } = useContext(CartContext)

  const handleNavigateHomePage = () => {
    navigate('/')
  }

  const handleNavigateLoginPage = () => {
    navigate('/login')
  }

  const handlenavigateSingupPage = () => {
    navigate('/singup')
  }

  const handlenavigateExplore = () => {
    navigate('/explorer')
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleNavigateHomePage}>CLUB CLOTHING</HeaderTitle>
      <HeaderItems>
        <HeaderItem onClick={handlenavigateExplore}>Explorar</HeaderItem>
        {!isAuthentication && (
          <>
            <HeaderItem onClick={handleNavigateLoginPage}>Login</HeaderItem>
            <HeaderItem onClick={handlenavigateSingupPage}>
              Criar conta
            </HeaderItem>
          </>
        )}
        {isAuthentication && (
          <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
        )}
        <HeaderItem onClick={toggleCart}>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
