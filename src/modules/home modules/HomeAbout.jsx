import React from 'react'
import PrimaryBtn from '../../components/PrimaryBtn'

export default function HomeAbout() {
  return (
    <div className='px-40 py-24 grid grid-cols-12 gap-14 items-center'>
      <div className='col-span-6'>
        <img src='src/assets/home/home_about-img.png' alt="About Img" />
      </div>
      <div className='col-span-6'>
        <p className='text-[#1E212C] font-bold'>Who we are</p>
        <h4 className='text-[#1E212C] font-bold text-5xl mt-2'>Why Createx?</h4>
        <ul className='flex flex-col gap-4 my-6'>
            <li>A fermentum in morbi pretium aliquam adipiscing <br /> donec tempus.</li>
            <li>Vulputate placerat amet pulvinar lorem nisl.</li>
            <li>Consequat feugiat habitant gravida quisque elit <br /> bibendum id adipiscing sed.</li>
            <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>
            <li>Tincidunt sagittis neque sem ac eget.</li>
            <li>Ultricies amet justo et eget quisque purus <br /> vulputate dapibus tortor.</li>
        </ul>
        <PrimaryBtn text="More bout us" link='/about' />
      </div>
    </div>
  )
}
