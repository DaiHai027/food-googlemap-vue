import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
// styles
import './assets/scss/App.scss'
//components
import Navigation from './components/Navigation'
// pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import LogoutPage from './pages/LogoutPage'
import SignupPage from './pages/SignupPage'
import NotFoundPage from './pages/NotFoundPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import UpdateProfilePage from './pages/UpdateProfilePage'
import AddPlacePage from './pages/AddPlacePage'
import UsersPage from './pages/UsersPage'
import PlacesPage from './pages/PlacesPage'
import PlacePage from './pages/PlacePage'
import TipsPage from './pages/Tipspage'
import RequireAdmin from './components/RequireAdmin'

import { ToastContainer } from 'react-toastify'

import RequireAuth from './components/RequireAuth'


function App() {

  return (
    <div className="App">
        <Navigation />

        <Routes>
              {/* Guest routes */}
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" element={<HomePage />} />

              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<LogoutPage />} />
              <Route path="/signup" element={<SignupPage />} />

              <Route path="/forgot-password" element={<ForgotPasswordPage />} />

              {/* Protected routes for admin users */}
              <Route path="/tips" element={
                <RequireAuth>
                  <RequireAdmin>
                    <TipsPage />
                  </RequireAdmin>
                </RequireAuth>
              } />

              <Route path="/add-places" element={
                <RequireAuth>
                  <RequireAdmin>
                    <AddPlacePage />
                  </RequireAdmin>
                </RequireAuth>
              } />

              <Route path="/places" element={
                <RequireAuth>
                  <RequireAdmin>
                    <PlacesPage />
                  </RequireAdmin>
                </RequireAuth>
              } />

              <Route path="/places/:id" element={
                <RequireAuth>
                  <RequireAdmin>
                    <PlacePage />
                  </RequireAdmin>
                </RequireAuth>
              } />

              <Route path="/users" element={
                <RequireAuth>
                  <RequireAdmin>
                    <UsersPage />
                  </RequireAdmin>
                </RequireAuth>
              } />

              {/* Protected routes for normal users */}
              <Route path="/update-profile" element={
                <RequireAuth>
                  <UpdateProfilePage />
                </RequireAuth>
              } />

        </Routes>

        <ToastContainer/>
        <ReactQueryDevtools />

    </div>
  )
}

export default App
