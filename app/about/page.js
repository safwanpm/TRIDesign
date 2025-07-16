import React from 'react'
import Navbar from '../components/Navbar'
import AboutHeader from '../components/about/AboutHeader'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import AboutSection from '../components/about/Aboutsection'
import MeetCrew from '../components/about/MeetCrew'


function AboutPage() {
  return (
    <div>
        <Navbar/>
        <AboutHeader/>
        <AboutSection/>
        <MeetCrew/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default AboutPage