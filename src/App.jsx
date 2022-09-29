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

              <Route path="/addPlaces" element={<AddPlacePage />} />

              <Route path="/places" element={<PlacesPage /> } />

              <Route path="/places/:id" element={ <PlacePage />} />

              {/* Protected routes */}
              <Route path="/update-profile" element={<UpdateProfilePage />} />

              <Route path="/users" element={<UsersPage />} />


        </Routes>

    </div>
  )
}

export default App
