'use client';
import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Footer() {
  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true,     // Animation will happen only once
    });
}, []);
  return (
    <div> 
    <footer className="w-full mt-auto  bg-primary-gradient text-white py-2 text-center" >
      <p className='text-sm'>© 2024 Tri Design</p>
    </footer></div>
  )
}

export default Footer