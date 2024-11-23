import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home';
import Login from './components/Login';
import Events from './components/Events';
import Register from './components/Register';
import { Outlet } from 'react-router-dom';
import FundCard from './components/Events/FundCard';
function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
      
  )
}

export default App
