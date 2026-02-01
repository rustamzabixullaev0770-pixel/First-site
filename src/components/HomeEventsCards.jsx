import React from 'react'
import BorderBtn from './BorderBtn'

export default function HomeEventsCards({number , month, time, description, sDescription}) {
  return (
    <div className='grid grid-cols-20 px-4 py-6 bg-white rounded-lg homeEvent items-center'>
      <div className='col-span-1 text-[#FF3F3A] text-5xl font-bold'>{number}</div>
      <div className='col-span-3 px-4'>
        <p className='text-[#1E212C] text-xl font-bold'>{month}</p>
        <p className='text-[#787A80 ]'>{time}</p>
      </div>
      <div className='col-span-13'>
        <p className='text-[#1E212C] font-bold'>{description}</p>
        <p className='text-[#787A80]'>{sDescription}</p>
      </div>
      <div className='col-span-3'>
        <BorderBtn text_2="View more" link_2="/events" />
      </div>
    </div>
  )
}
