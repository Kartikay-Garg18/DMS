import { useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {login, logout} from './store/authSlice'
import { getCurrentUser } from './services/auth'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getCurrentUser()
        dispatch(login(data))
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
