'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mobile menu animation
  const mobileMenuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative overflow-x-hidden">
      <nav className=" font-dominik text-secondary fixed top-0 left-0 z-50 flex justify-between items-center py-4 md:py-8 px-4 md:px-16 w-full  text-white  dark:bg-black">
        {/* Image Logo */}

        <motion.a
          href="/"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center"
        >
          <Image
            src="/images/vexa-primary.png" // Make sure this image exists in your `public` folder
            alt="Logo"
            width={160}
            height={20}
            className="object-contain"
          />
        </motion.a>

        {/* Always visible Toggle Button */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className=""
        >
          <button onClick={() => setIsOpen((prev) => !prev)} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-7 h-7 me-6 md:me-8 text-secondary text-primary transition duration-200"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </motion.div>
      </nav>

      {/* Slide-in Mobile/Toggle Menu */}
      <motion.div
        className="font-caviar fixed flex flex-col items-center text-primary bg-white justify-center h-full w-full shadow-md z-40 pt-12"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={mobileMenuVariants}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        {/* Nav Links */}
        <motion.ul
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.7 }}
          className="font-dominik flex flex-col space-y-6 text-secondary text-4xl py-4 px-8"
        >
          {['Home', 'About', 'Works', 'Contact','Services'].map((item, index) => (
            <li key={index}>
              <Link href={`/${item === 'Home' ? '' : item.toLowerCase()}`}>
                {item}
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* Bottom Left - Email */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className=" hidden md:block absolute bottom-8 left-8 text-sm text-secondary"
        >
          <Link
            href="mailto:vexarchitect@gmail.com"
            className=" ms-16 hover:underline transition-all duration-200 font-dominik"
          >
            vexarchitect@gmail.com
          </Link>
        </motion.div>

        {/* Bottom Right - Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className=" absolute bottom-8 right-8 flex space-x-6 me-8"
        >
          <Link href="https://www.instagram.com" target="_blank">
            <svg
              className="w-6 h-6 text-secondary hover:text-white transition-transform hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm5.25-.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/in/muhammed-safwan-pm" target="_blank">
            <svg
              className="w-6 h-6 text-secondary hover:text-white transition-transform hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 24h4V8h-4v16zm7.5 0h4v-8c0-1.3.7-2 2-2s2 .7 2 2v8h4v-8c0-3.3-1.7-5-5-5s-4.5 1.7-5 3.2V8h-4v16z" />
            </svg>
          </Link>
          
        </motion.div>
      </motion.div>

    </div>
  );
};

export default Navbar;
