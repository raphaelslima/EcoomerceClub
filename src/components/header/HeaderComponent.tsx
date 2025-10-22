import './header.css'
import { BsCart3 } from 'react-icons/bs'

import { HeaderContainer } from './headerStyle'

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header-title">CLUB CLOTHING</div>
      <div className="header-items">
        <div className="header-item">Explorar</div>
        <div className="header-item">Login</div>
        <div className="header-item">Criar Conta</div>
        <div className="header-item">
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </div>
      </div>
    </HeaderContainer>
  )
}

export default Header
