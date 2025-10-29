import Home from './pages/home/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import SingupPage from './pages/singup/SingupPage'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './config/firebaseConfig'
import { useContext } from 'react'
import { UserContext } from './contexts/userContext'
import { collection, getDocs, query, where } from 'firebase/firestore'

const App = () => {
  const { currentUser, loginUser, isAuthentication, logoutUser } =
    useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    if (isAuthentication && !user) {
      return logoutUser()
    }

    if (!isAuthentication && user) {
      const querySnapshot = await getDocs(
        query(collection(db, 'users'), where('id', '==', user.uid))
      )

      const userFromFirestore = querySnapshot.docs[0]?.data()
      return loginUser(userFromFirestore as any)
    }
  })

  console.log(currentUser)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singup" element={<SingupPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
