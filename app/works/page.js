import React from 'react'
import WorksHeader from '../components/works/WorksHeader'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WorkShowcase from '../components/works/WorkShowcase'

function WorksPage() {
  return (
    <div>
        <Navbar/>
        <WorksHeader/>
        <WorkShowcase
  items={[
    { id: '1', img: '/img1.jpg', url: '/images/6.jpg', height: 400 },
    { id: '2', img: '/img2.jpg', url: '/images/7.jpg', height: 300 },
    // ...
  ]}
/>

        <Contact/>
        <Footer/>
    </div>
  )
}

export default WorksPage