import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'
const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedSection />
      <Banner />
      <div className="mt-16 md:mt-24">
        <Testimonial />
      </div>
      <div>
        <Newsletter />
      </div>
    </div>
  )
}

export default Home
