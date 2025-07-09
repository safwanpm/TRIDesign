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
      <nav className=" font-dominik text-secondary fixed top-0 left-0 z-50 flex justify-between items-center py-8 md:py-8 px-8 md:px-16 w-full  text-white  dark:bg-black">
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
            width={120}
            height={10}
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
              className="w-7 h-7 text-secondary text-primary transition duration-200"
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
    {['Home', 'About', 'Works', 'Contact'].map((item, index) => (
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
    className="absolute bottom-8 left-8 text-sm text-secondary"
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
    className="absolute bottom-8 right-8 flex space-x-6 me-8"
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
    <Link href="https://www.behance.net" target="_blank">
      <svg
        className="w-6 h-6 text-secondary hover:text-white transition-transform hover:scale-110"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8.11 10.09c.65-.47.95-1.15.95-2.04 0-1.67-1.03-2.51-3.1-2.51H0v9.06h6.17c2.27 0 3.47-.96 3.47-2.72 0-1.01-.43-1.74-1.53-2.1zM3.52 7.14h1.58c.83 0 1.26.36 1.26 1.07 0 .73-.44 1.06-1.3 1.06H3.52V7.14zm1.8 5.59H3.52v-2.23h1.76c.91 0 1.4.35 1.4 1.11s-.5 1.12-1.36 1.12zM19.87 9.14c-1.63 0-2.86 1.19-2.86 2.86s1.23 2.86 2.86 2.86c1.38 0 2.35-.68 2.64-1.91h-1.29c-.15.37-.47.58-.91.58-.63 0-1.06-.44-1.09-1.09h3.84c.07-2.11-1.14-3.3-3.19-3.3zm-.01 1.1c.56 0 .97.31 1.06.91h-2.08c.09-.6.49-.91 1.02-.91zM23 6h-5.02v1.1H23V6z" />
      </svg>
    </Link>
  </motion.div>
</motion.div>

    </div>
  );
};

export default Navbar;
