import React from 'react'

export default function HomeAbout2() {
    return (
        <div className='px-40 py-16'>
            <p className='text-[#1E212C] font-bold text-center'>OUR BENEFITS</p>
            <h4 className='text-[#1E212C] font-bold text-5xl text-center'>That’s how we do it</h4>
            <div className='grid grid-cols-12 items-center gap-12 my-12'>
                <div className='col-span-6'>
                    <h4 className='text-[#1E212C] text-4xl font-bold mb-4'>Only practicing tutors</h4>
                    <p>Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames <br /> dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis <br /> augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam <br /> diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. <br /> Amet enim, nisi tempus vehicula.</p>
                </div>
                <div className='col-span-6'>
                    <img src='src/assets/home/home_about2-img.png' alt="Home Img" />
                </div>
            </div>
        </div>
    )
}
