'use client';
import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import SwiperComp from '../components/swiper'
import Swiper2 from '../components/Swiper2'
import Swiper3 from '../components/Swiper3'
import Swiper4 from '../components/Swiper4'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function ThreeD() {
  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true,     // Animation will happen only once
    });
}, []);
  return (
    <>
    <Navbar/>
     <div className='px-8 md:px-24 mt-24'>
     <h2 className=" text-center text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-primary-gradient"data-aos="zoom-in">
         Recent Works
       </h2>
    <SwiperComp/>
    <Swiper2/>
    <Swiper3/>
    <Swiper4/>
   </div>
   <Contact/>
   <Footer/>
   </>
  )
}

export default ThreeD