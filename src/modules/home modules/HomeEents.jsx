import React from 'react'

export default function HomeEvents() {
  return (
    <div style={{ backgroundImage: `url(src/assets/home/home_events-bg.png)`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className='px-40 py-12'>
      <p className='text-[#1E212C] font-bold text-center'>Our Events</p>
      <h4 className='text-[#1E212C] text-5xl font-bold text-center'>Lectures & workshops</h4>
    </div>
  )
}
