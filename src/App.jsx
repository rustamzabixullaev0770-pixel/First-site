import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './modules/Footer'
import NavBar from './modules/NavBar'

export default function App() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
