import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PrimaryBtn({link, text}) {
  return (
    <NavLink to = {link}><button className='primaryBtn px-8 py-[14px] bg-linear-to-r from-[#FF3F3A] to-[#F75E05] rounded text-white font-bold'>{text}</button></NavLink>
  )
}
