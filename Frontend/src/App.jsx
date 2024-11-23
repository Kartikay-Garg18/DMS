import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home';
import Login from './components/Login';
import Events from './components/Events';
import Register from './components/Register';
function App() {

  return (
    <>
    <Header/>
    {/* <Home/>
    <Login/>
    <Register/> */}
    <Events></Events>
    <Footer/>
    </>
      
  )
}

export default App
