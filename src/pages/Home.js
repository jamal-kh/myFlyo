import React from 'react'
import Landing from '../components/Landing'
import Features from '../components/Features'
import StayProductive from '../components/StayProductive'
import Testimonials from '../components/Testimonials'
import GetStarted from '../components/GetStarted'

const Home = () => {
  return (
    <div>
      <Landing />
      <Features />
      <StayProductive />
      <Testimonials />
      <GetStarted />
    </div>
  )
}

export default Home