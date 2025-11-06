import { FunctionComponent, useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/userContext'
import { useNavigate } from 'react-router-dom'
import LoadingComponent from '../loading/LoadingComponent'

const CheckAuthentication: FunctionComponent = ({ children }) => {
  const { isAuthentication } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthentication) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [])

  if (!isAuthentication) {
    return (
      <LoadingComponent message="Você precisar estar logado para continuar, redirecionando para a página de login" />
    )
  }

  return <>{children}</>
}

export default CheckAuthentication
