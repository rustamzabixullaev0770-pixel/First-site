import React from 'react'
import logo from './../assets/nav_bar-logo.png'
import PrimaryBtn from '../components/PrimaryBtn'
import { FaRegUser } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (

    <div className='absolute z-50  top-0 left-0 w-full flex justify-center'>
      <div className='w-full max-w-[1440px] flex justify-between items-center px-40 my-12'>
        <div className='flex items-center gap-16'>
          <NavLink to='' ><img src={logo} alt="Logo" /></NavLink>
          <ul className='flex gap-10 text-[#424551] font-bold'>
            <li><NavLink to='/about'>About Us</NavLink></li>
            <li><NavLink to='/courses'>Courses</NavLink></li>
            <li><NavLink to='/events'>Events</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/contacts'>Contacts</NavLink></li>
          </ul>
        </div>
        <div className='flex items-center gap-2'>
          <PrimaryBtn text="Get consultation" />
          <button className='navBarWhiteBtn flex justify-between items-center gap-2 px-8 py-4 rounded font-bold'><FaRegUser className='text-2xl' />Log in / Register</button>
        </div>
      </div>
    </div>
  )
}
