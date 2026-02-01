import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BorderBtn({link_2, text_2}) {
  return (
    <NavLink to = {link_2}><button className='borderBtn px-8 py-3 rounded border-2 border-[#FF3F3A] text-[#FF3F3A] font-bold'>{text_2}</button></NavLink>
  )
}
