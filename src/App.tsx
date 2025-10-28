import Home from './pages/home/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import SingupPage from './pages/singup/SingupPage'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebaseConfig'

const App = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })
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
