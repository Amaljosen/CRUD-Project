import React from 'react'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import Crud from './Components/Crud'
import Footer from './Components/Footer'


export default function App() {
  return (
    <div>
     <Navbar/>
     <Profile/>
     <Crud/>
     <Footer/>
    </div>
  )
}
