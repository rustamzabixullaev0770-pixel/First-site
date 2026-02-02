import React from 'react'
import PrimaryBtn from '../components/PrimaryBtn'

export default function ContactsSection() {
  return (
    <div className='pt-28 pb-44 bg-[url("src/assets/home/contacts_bg.png")]'>
        <p className='text-[gray/900] font-bold text-center'>DON'T MISS ANYTHING</p>
        <h2 className='text-[#1E212C] font-bold text-5xl text-center mt-4 mb-16'>Subscribe to the Createx School <br /> announcements</h2>
        <div className='flex justify-center gap-6 w-full'>
            <input type="text" className='bg-white rounded w-110 outline-none p-4' placeholder='Your working email'/>
            <PrimaryBtn text="Subscribe" />
        </div>
    </div>
  )
}
