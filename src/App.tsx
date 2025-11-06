import Home from './pages/home/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import SingupPage from './pages/singup/SingupPage'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './config/firebaseConfig'
import { useContext, useState } from 'react'
import { UserContext } from './contexts/userContext'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { userConvert } from './converter/firebaseConvert'
import LoadingComponent from './components/loading/LoadingComponent'
import ExplorePage from './pages/explore/ExplorePage'
import CategoryDetailsPage from './pages/categoryDetails/categoryDetailsPage'
import CartComponent from './components/cart/CartComponent'
import CheckoutPage from './pages/checkout/CheckoutPage'
import CheckAuthentication from './components/checkAuthentication/CheckAuthenticationComponent'

const App = () => {
  const [isInitialized, setIsInitialized] = useState(true)
  const { currentUser, loginUser, isAuthentication, logoutUser } =
    useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    if (isAuthentication && !user) {
      logoutUser()
      return setIsInitialized(false)
    }

    if (!isAuthentication && user) {
      const querySnapshot = await getDocs(
        query(
          collection(db, 'users').withConverter(userConvert),
          where('id', '==', user.uid)
        )
      )

      const userFromFirestore = querySnapshot.docs[0]?.data()
      loginUser(userFromFirestore)
      return setIsInitialized(false)
    }
    return setIsInitialized(false)
  })

  console.log(currentUser)
  if (isInitialized) return <LoadingComponent />
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singup" element={<SingupPage />} />
        <Route path="/explorer" element={<ExplorePage />} />
        <Route path="/category/:id" element={<CategoryDetailsPage />} />
        <Route
          path="/checkout"
          element={
            <CheckAuthentication>
              <CheckoutPage />
            </CheckAuthentication>
          }
        />
      </Routes>

      <CartComponent />
    </BrowserRouter>
  )
}

export default App
