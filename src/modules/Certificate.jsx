import React from 'react'
import certificate from '../assets/home/certificate.png'
import img_1 from '../assets/home/certificate section imgs/logo_1.png'
import img_2 from '../assets/home/certificate section imgs/logo_2.png'
import img_3 from '../assets/home/certificate section imgs/logo_3.png'

export default function Certificate() {
  return (
    <div className='px-40 pt-36 grid grid-cols-12 gap-10'>
      <div className="col-span-5">
        <p className='text-[#1E212C] font-bold'>CREATEX CERTIFICATE</p>
        <h1 className='text-[#1E212C] font-bold text-5xl mt-3'>Your expertise will <br /> be confirmed</h1>
        <p className='text-[#424551] my-10'>We are accredited by international professional <br /> organizations and institutes:</p>
        <div className='flex justify-between'>
            <img src={img_1} alt="Logo" />
            <img src={img_2} alt="Logo" />
            <img src={img_3} alt="Logo" />
        </div>
      </div>
      <div className="col-span-7">
        <img src={certificate} alt="Certificate Img" />
      </div>
    </div>
  )
}
