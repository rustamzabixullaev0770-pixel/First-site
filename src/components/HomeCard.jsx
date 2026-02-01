import React from 'react'

export default function HomeCard({img, kasb, yonalish, maosh, ism}) {
  return (
    <div className='homeCard grid grid-cols-12 border border-gray-400 rounded'>
      <div className='col-span-4'>
        <img src={img} alt="Courses Img" />
      </div>
      <div className='col-span-8 p-6 flex flex-col gap-2'>
        <div className="bg-[#F89828] px-3 py-1 w-34 text-center text-white rounded">{kasb}</div>
        <h5 className='text-[#1E212C] font-bold text-xl'>{yonalish}</h5>
        <p className='text-[#787A80] text-[18px]'><span className='text-[#FF4242] font-bold text-[18px]'>{maosh}</span> | {ism}</p>
      </div>
    </div>
  )
}
