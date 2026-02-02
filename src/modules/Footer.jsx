import React from 'react'
import footer_logo from "../assets/footer-logo.png"
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <div className='px-40 py-20 bg-[#1E212C] grid grid-cols-14 gap-9'>
        <div className='col-span-4'>
          <img src={footer_logo} alt="Logo" />
          <p className='text-gray-500 text-xs my-6'>Createx Online School is a leader in online studying. <br /> We have lots of courses and programs from the main <br />market experts. We provide relevant approaches <br /> to online learning, internships and employment in the <br /> largest companies in the country. </p>
          <div></div>
        </div>
        <div className='col-span-2'>
          <p className='text-white font-bold'>SITE MAP</p>
          <ul className='flex flex-col gap-2 text-[#424551] mt-3'>
            <li><NavLink to='/about'>About Us</NavLink></li>
            <li><NavLink to='/courses'>Courses</NavLink></li>
            <li><NavLink to='/events'>Events</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/contacts'>Contacts</NavLink></li>
          </ul>
        </div>
        <div className='col-span-2'>
          <p className='text-white font-bold'>Courses</p>
          <ul className='flex flex-col gap-2 text-[#424551] mt-3'>
            <li>Marketing</li>
            <li>Management</li>
            <li>HR & Recruting</li>
            <li>Design</li>
            <li>Development</li>
          </ul>
        </div>
        <div className='col-span-2'>
          <p className='text-white font-bold'>CONTACT US</p>
          <ul className='flex flex-col gap-2 text-[#424551] mt-3'>
            <li>(405) 555-0128</li>
            <li>hello@createx.com</li>
          </ul>
        </div>
        <div className='col-span-4'>
          <p className='text-white font-bold'>SIGN UP TO OUR NEWSLETTER</p>
          <input type="text" className='w-64 rounded bg-[#424551] my-6 p-2' placeholder='Email address' />
          <p className='text-[#424551] text-[10px]'>*Subscribe to our newsletter to receive communications and early <br /> updates from Createx SEO Agency.</p>
        </div>
      </div>
      <div className='px-40 py-4 flex justify-between items-center bg-gray-950'>
        <p className='text-[#424551] text-xs'>© All rights reserved.Made withby Createx Studio </p>
        <p className='text-[#424551] font-bold'>GO TO TOP</p>
      </div>
    </div>
  )
}
