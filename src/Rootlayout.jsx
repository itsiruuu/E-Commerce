import React from 'react'
import { Outlet } from 'react-router'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import SecHead from './Components/secHead'


const Rootlayout = () => {
  return (
    <div>
        <Header/>
        <NavBar/>
        <Outlet/>
        <SecHead/>
        <Footer/>
  
    </div>
  )
}

export default Rootlayout
