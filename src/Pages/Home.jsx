import React from 'react'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import NavBar from '../Components/NavBar'
// import Flashsales from '../Components/Flashsales'
import CountDown from '../Components/CountDown'
import SecHead from '../Components/secHead'
// import Cards from '../Components/Cards'

const Home = () => {
  return (
    <div>
       <Header/>
        <NavBar/>
       <Banner/>
       {/* <Flashsales/> */}
       <CountDown/>
       {/* <Cards/> */}
    </div>
  )
}

export default Home