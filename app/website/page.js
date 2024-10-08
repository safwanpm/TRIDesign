import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Website() {
  return (
    <>
      <Navbar />
      <div className='px-8 md:px-20 mt-24'>
        <h2 className=" text-center text-5xl font-bold text-transparent bg-clip-text bg-primary-gradient">
          Recent Works
        </h2>
        <section className="  flex flex-col md:flex-row items-center justify-between  bg-[#0d3b66] w-full md:h-[700px]   rounded-3xl">
          {/* Left Side: Image */}
          <div className="relative md:w-2/4 flex flex-col justify-center items-center bg-[#faf0ca] md:h-[700px] md:rounded-s-3xl">
            {/* Top Image */}
            <img
              src="/images/Back 2.png" // Replace with your top image path
              alt="Top Banner"
              className="hidden md:block absolute  right-0 md:h-[700px]  "
            />

            {/* Main Image */}
            <img
              src="/images/laptop-min.png" // Replace with your image path
              alt="Website Showcase"
              className="w-3/4 md:w-3/4 rounded-lg overflow-hidden "
            />
          </div>

          {/* Right Side: Text and Tags */}
          <div className="md:w-2/4  text-white mt-8 md:mt-0 p-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Zahrat Al Reef</h2>

            <p className="text-lg mb-6">
              Developed a  web platform for Zahrat Alreef Elect. and Sanitaryware Tr. LLC,
              showcasing an extensive product range with seamless customer interaction.
              Crafted to reflect the shop's commitment to quality and exceptional service
            </p>
            <a href="https://www.zahratalreeftrading.com" className="bg-white  text-purple-700 px-6 py-3 rounded-full flex items-center gap-2">
              <span>View Projects</span>
              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </section>
      </div>
      <Contact />
      <Footer />
    </>

  )
}

export default Website