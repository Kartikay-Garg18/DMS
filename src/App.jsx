import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home';
import Login from './components/Login';
function App() {

  return (
    <>
    <Header/>
    <Home/>
    <Login/>
    <Footer/>
    </>
      
  )
}

export default App
