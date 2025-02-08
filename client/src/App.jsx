import { useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, logout } from './store/authSlice'
import { getCurrentUser } from './services/auth'
import Cookies from 'js-cookie'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const accessToken = Cookies.get('accessToken')
        if (accessToken) {
          const data = await getCurrentUser(accessToken)
          dispatch(login(data))
        } else {
          dispatch(logout())
        }
      } catch (error) {
        dispatch(logout())
      }
    }
    fetchUser()
  }, [])

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
