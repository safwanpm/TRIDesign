'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';
// import CircularText from './animatedcomponents/Circulartext';

const Contact = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center">
        {/* Main heading with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-4">
            Got an Interesting Project?
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent relative"
          >
            Let's Connect.
            <motion.a
              href='/contact'
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              className="absolute -top-4 -right-12 md:-right-16 lg:-right-20"
            >
              {/* <ArrowUpRight className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-pink-500" /> */}
            

            </motion.a>
          </motion.h2>
        </motion.div>

        {/* Contact buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <Phone className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 font-medium">Call now</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <Mail className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 font-medium">Mail us</span>
          </motion.button>
        </motion.div>

        {/* Social media icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex justify-center gap-6"
        >
          {/* Behance */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.5 11.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5zM14 9h3.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5H14V9zm0 5h3.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5H14v-5z" />
            </svg>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </motion.a>

          {/* Dribbble */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.273 5.698-.653-.126-7.512-1.538-7.512-1.538s-.669-1.417-1.277-2.948c3.037-1.253 5.844-1.223 6.516-1.212zM12 2.145c2.846 0 5.44 1.108 7.398 2.92-.609-.055-3.593-.055-6.749 1.334C11.804 4.919 10.848 3.803 10.848 3.803s.609-.402 1.152-1.658zm-1.86 2.654s.801 1.115 1.653 2.57C8.206 8.797 4.991 11.3 4.991 11.3s-.055-.653-.055-1.3c0-2.82 1.116-5.389 2.924-7.201 1.538 1.115 3.28 2 3.28 2zm8.547 8.063c-.108 2.795-1.279 5.343-3.197 7.156-.653-.451-2.957-2.068-6.189-2.846-3.232-.779-4.119-2.068-4.119-2.068s-.108-.342-.108-.669c0-.564.108-1.116.271-1.638 0 0 3.365-2.654 6.803-4.175C13.938 8.206 15.437 10.862 18.687 10.862z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;