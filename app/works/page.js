import React from 'react'
import WorksHeader from '../components/works/WorksHeader'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function WorksPage() {
  return (
    <div>
        <Navbar/>
        <WorksHeader/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default WorksPage