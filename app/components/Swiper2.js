'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 
// import required modules
import { Pagination ,Autoplay} from 'swiper/modules';

export default function Swiper2() {
  const images = [
    './images/home1.jpg',
 
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}  // Add Autoplay to modules
        className="mySwiper"
        autoplay={{
          delay: 3000, // Slide transition delay in milliseconds
          disableOnInteraction: false, // Keep autoplay even when user interacts
        }}
        loop={true}  // Loop through slides
        grabCursor={true}  // Change the cursor to indicate it's draggable
      >
       
          {images.map((image, index) => (
            <SwiperSlide key={index}>
               <div className='rounded-lg p-2 md:p-20'>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className=" object-cover rounded-xl"
              />
              </div>
            </SwiperSlide>
          ))}
        
      </Swiper>
    </>
  );
}
