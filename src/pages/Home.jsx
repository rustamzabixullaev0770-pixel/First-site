import React from 'react'
import Header from '../modules/home modules/Header'
import HomeAbout from '../modules/home modules/HomeAbout'
import HomeCourses from '../modules/home modules/HomeCourses'
import HomeAbout2 from '../modules/home modules/HomeAbout2'
import HomeEvents from '../modules/home modules/HomeEents'
import Certificate from '../modules/Certificate'

export default function Home() {
  return (
    <div>
      <Header/>
      <HomeAbout/>
      <HomeCourses/>
      <HomeAbout2/>
      <HomeEvents/>
      <Certificate/>
    </div>
  )
}
