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

function App() {

  return (
    <div className="App">

      <Routes>
              {/* Guest routes */}
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} /> */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<LogoutPage />} />
              <Route path="/signup" element={<SignupPage />} />

              {/* Protected routes */}
              
      </Routes>

    </div>
  )
}

export default App
