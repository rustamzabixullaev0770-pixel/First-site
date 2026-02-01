import React from 'react'
import img_1 from '../../assets/home/home courses img/img_1.png'
import img_2 from '../../assets/home/home courses img/img_2.png'
import img_3 from '../../assets/home/home courses img/img_3.png'
import img_4 from '../../assets/home/home courses img/img_4.png'
import img_5 from '../../assets/home/home courses img/img_5.png'
import img_6 from '../../assets/home/home courses img/img_6.png'
import BorderBtn from '../../components/BorderBtn'
import HomeCard from '../../components/HomeCard'

export default function HomeCourses() {

    const data = [
        {
            kasb: "Marketing",
            yonalish: "The Ultimate Google Ads Training Course",
            maosh: "$100",
            ism: "by Jerome Bell",
            img: img_1,
        },        {
            kasb: "Management",
            yonalish: "TPrduct Management Fundamentals",
            maosh: "$480",
            ism: "by Marvin McKinney",
            img: img_2,
        },        {
            kasb: "HR & Recruting",
            yonalish: "HR  Management and Analytics",
            maosh: "$200",
            ism: "by Leslie Alexander Li",
            img: img_3,
        },        {
            kasb: "Marketing",
            yonalish: "Brand Management & PR Communications",
            maosh: "$530",
            ism: "by Kristin Watson",
            img: img_4,
        },        {
            kasb: "Management",
            yonalish: "Business Development Management",
            maosh: "$400",
            ism: "by Dianne Russell",
            img: img_5,
        },        {
            kasb: "Design",
            yonalish: "Graphic Design Basic",
            maosh: "$500",
            ism: "by Guy Hawkins",
            img: img_6,
        }
    ]

  return (
    <div className='px-40 py-12'>
      <div className='flex justify-between items-center'>
        <div>
            <p className='text-[#1E212C] font-bold'>Ready to learn?</p>
            <h4 className='text-[#1E212C] text-5xl font-bold'>Featured Courses</h4>
        </div>
        <BorderBtn text_2="View all courses" link_2='/courses' />
      </div>
      <div className='grid grid-cols-2 gap-6 my-12'>
        {
            data.map(card => (
                <HomeCard kasb={card.kasb} yonalish={card.yonalish} maosh={card.maosh} ism={card.ism} img={card.img} />
            ))
        }
      </div>
    </div>
  )
}
