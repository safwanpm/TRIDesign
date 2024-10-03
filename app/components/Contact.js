import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaBehance, FaLinkedin, FaInstagram, FaDribbble } from 'react-icons/fa'; // Importing icons

const Contact = () => {
    return (
        <div className="  min-h-full lg:min-h-screen space-x-10 flex px-24 justify-center items-center py-12 bg-">
            <div className=''> <div className=" text-left mb-12">
                <h1 className="text-4xl md:text-7xl font-bold text-black">
                    Got an Interesting Project?
                </h1>
                <h2 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mt-2">
                    Let’s Connect.
                </h2>


            </div>
                <div className="px-4 inline-flex items-center space-x-0 md:space-x-4 p-2 border rounded-full shadow-lg bg- max-w-max">
                    {/* Call Now Button */}
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-600 hover:text-black focus:outline-none">
                        <FaPhoneAlt /> {/* Phone Icon */}
                        <span className='text-xs md:text-sm'>Call now</span>
                    </button>

                    {/* Mail Us Button */}
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-600 hover:text-black focus:outline-none">
                        <FaEnvelope /> {/* Mail Icon */}
                        <span className='text-xs md:text-sm'>Mail us</span>
                    </button>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4 text-gray-600">
                        <a href="#" className="hover:text-black">
                            <FaLinkedin size={20} /> {/* LinkedIn Icon */}
                        </a>
                        <a href="#" className="hover:text-black">
                            <FaInstagram size={20} /> {/* Instagram Icon */}
                        </a>
                        <a href="#" className="hover:text-black">
                            <FaDribbble size={20} /> {/* Dribbble Icon */}
                        </a>
                    </div>
                </div>

            </div>



            <div className="">
                <button className="p-4 md:p-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                    <span role="img" aria-label="arrow" className="text-white text-2xl">↗️</span>
                </button>
            </div>
        </div>

    );
};

export default Contact;
