import React from 'react'
import About from '../About/About'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'
import Hero from '../../components/Hero/Hero'
import Achievements from '../Achievements/Achievements'
import Images from '../Images/Images'

const Home = () => {
  return (
    <main>
        <Hero/>
        <About/>
        <Services/>
        <Achievements/>
        <Images/>
        <Contact/>
    </main>
  )
}

export default Home