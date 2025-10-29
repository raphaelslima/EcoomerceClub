import { createContext, FunctionComponent, useState } from 'react'
import User from '../types/user'

interface IuserContext {
  currentUser: User | null
  isAuthentication: boolean
  loginUser: (user: User) => void
  logoutUser: () => void
}

export const UserContext = createContext<IuserContext>({
  currentUser: null,
  isAuthentication: false,
  loginUser: () => {},
  logoutUser: () => {}
})

const UserContextProvider: FunctionComponent = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const isAuthentication = currentUser !== null

  const loginUser = (user: User) => {
    setCurrentUser(user)
  }

  const logoutUser = () => {
    setCurrentUser(null)
  }

  return (
    <UserContext.Provider
      value={{ currentUser, isAuthentication, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
