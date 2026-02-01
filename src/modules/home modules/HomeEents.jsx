import React from 'react'
import HomeEventsCards from '../../components/HomeEventsCards'
import PrimaryBtn from '../../components/PrimaryBtn'

export default function HomeEvents() {

  const events = [
    {
      number: "05",
      month: "August",
      time: "11:00 - 14:00",
      description: "Formation of the organizational structure of the company in the face of uncertainty.",
      sDescription: "Onine master-class"
    }, {
      number: "24",
      month: "July",
      time: "11:00 – 12:30",
      description: "Building a customer service department. Best Practices.",
      sDescription: "Onine lecture"
    }, {
      number: "05",
      month: "July",
      time: "10:00 – 13:00",
      description: "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
      sDescription: "Onine workshop"
    }
  ]

  return (
    <div className='bg-[url(src/assets/home/home_events-bg.png)] object-cover bg-center'>
      <div className='px-40 pt-34 pb-24'>
        <div>
          <p className='text-[#1E212C] font-bold text-center'>Our Events</p>
          <h4 className='text-[#1E212C] text-5xl font-bold text-center'>Lectures & workshops</h4>
        </div>
        <div className='flex flex-col gap-8 my-16'>
          {
            events.map(event => (
              <HomeEventsCards number={event.number} month={event.month} time={event.time} description={event.description} sDescription={event.sDescription} />
            ))
          }
        </div>
        <div className='flex justify-center gap-10 mt-16 items-center'>
          <h2 className='text-[#1E212C] text-3xl font-bold'>Do you want more?</h2>
          <PrimaryBtn text="Explore all events" link="/events" />
        </div>
      </div>
    </div>
  )
}
