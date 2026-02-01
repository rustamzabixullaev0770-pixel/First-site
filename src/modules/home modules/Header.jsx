import React from 'react'
import BorderBtn from '../../components/BorderBtn'
import PrimaryBtn from '../../components/PrimaryBtn'
    
export default function Header() {
    return (
        <div style={{ backgroundImage: `url(src/assets/home/home_header-bg.png)`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className='z-10 relative homeHeader px-40 pt-36 py-12'>
            <div className='grid grid-cols-12 my-16 items-center'>
                <div className='col-span-6'>
                    <h1 className='text-[#1E212C] font-bold text-6xl leading-normal my-16'>Enjoy studying <br />with Createx <br /> Online Courses</h1>
                    <div className='flex gap-6'>
                        <BorderBtn text_2="About us" link_2='/about' />
                        <PrimaryBtn text="Explore courses" link='/courses' />
                    </div>
                </div>
                <div className='col-span-6'>
                    <img src='src/assets/home/home_heder-img.png' alt="Headre Img" />
                </div>
            </div>
            <div className='flex justify-between mt-36 mb-12'>
                <p className='flex items-center gap-3 text-[#1E212C]'><span className='font-bold text-5xl'>1200</span>Students graduated</p>
                <p className='flex items-center gap-3 text-[#1E212C]'><span className='font-bold text-5xl'>84</span>Completed courses</p>
                <p className='flex items-center gap-3 text-[#1E212C]'><span className='font-bold text-5xl'>16</span>Qualified tutors</p>
                <p className='flex items-center gap-3 text-[#1E212C]'><span className='font-bold text-5xl'>5</span>Years of experience</p>
            </div>
        </div>
    )
}
