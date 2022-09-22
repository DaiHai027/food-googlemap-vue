import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
// styles
import './assets/scss/App.scss'
// pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import LogoutPage from './pages/LogoutPage'
import SignupPage from './pages/SignupPage'
import NotFoundPage from './pages/NotFoundPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import UpdateProfilePage from './pages/UpdateProfilePage'

function App() {

  return (
    <div className="App">

      <Routes>
              {/* Guest routes */}
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" element={<HomePage />} />
              
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<LogoutPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/forgotPassword" element={<ForgotPasswordPage />} />

              {/* Protected routes */}
              <Route path="/update-profile" element={<UpdateProfilePage />} />
              
      </Routes>

    </div>
  )
}

export default App
