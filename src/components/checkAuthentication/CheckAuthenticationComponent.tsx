import { FunctionComponent, useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/userContext'
import { useNavigate } from 'react-router-dom'

const CheckAuthentication: FunctionComponent = ({ children }) => {
  const { isAuthentication } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthentication) {
      navigate('/login')
    }
  }, [])

  return <>{children}</>
}

export default CheckAuthentication
