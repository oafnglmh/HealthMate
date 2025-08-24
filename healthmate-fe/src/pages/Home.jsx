import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import WhyChooseHealthMate from '../components/WhyChooseHealthMate'
import TopDoctor from '../components/TopDoctor'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className="mt-20">
      <Header />
      <WhyChooseHealthMate />
      <SpecialityMenu />
      <TopDoctor />
      <Footer />
    </div>
  )
}

export default Home
