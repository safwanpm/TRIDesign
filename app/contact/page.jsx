import React from 'react'
import ContactHeader from '../components/contact/ContactHeader'
import ContactForm from '../components/contact/ContactForm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function ContactPage() {
  return (
    <div>
        <Navbar/>
        <ContactHeader/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default ContactPage