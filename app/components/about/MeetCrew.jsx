'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const crewMembers = [
  '/images/crew1.jpg',
  '/images/crew1.jpg',
  '/images/crew1.jpg',
  '/images/crew1.jpg',
  '/images/crew1.jpg',
  '/images/crew1.jpg',
  '/images/crew1.jpg',
  
  '/images/crew1.jpg',
  
 
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function MeetCrew() {
  return (
    <section className=" font-dominik w-full px-6 py-16 ">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className=" mx-auto flex flex-col items-center justify-center"
      >
        <motion.h2
          className="text-5xl sm:text-6xl font-bold text-center leading-tight mb-16"
          variants={itemVariants}
        >
          {/* <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 bg-clip-text text-transparent"> */}
          <span className="bg-primary bg-clip-text text-transparent">
            Meet the Crew!
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {crewMembers.map((src, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={`Crew Member ${index + 1}`}
                width={190}
                height={180}
                className="object-cover w-full h-full aspect-square"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
