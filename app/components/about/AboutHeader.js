'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const AboutHeader = () => {
  return (
    <section className="bg-secondary min-h-[60vh] w-full mt-36">
      <div className="  mx-20 px-6 py-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/">
           <h1 className='text-5xl text-primary'>Vexa-Architect</h1>
          </Link>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-4"></div>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm text-gray-700 flex space-x-2 mb-6"
        >
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-black">About Us</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[80px] md:text-[120px] leading-tight text-black font-semibold"
        >
          About Us
        </motion.h1>
      </div>
    </section>
  );
};

export default AboutHeader;
