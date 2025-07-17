'use client';

import { motion } from 'framer-motion';

const OurStory = () => {
  return (
    <section className="min-h-screen flex items-center justify-center  relative px-4">
      <div className="absolute top-8 left-6 w-3 h-3 bg-black rounded-full"></div>

      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <p className="text-[22px] md:text-[32px] font-light text-[#1c1c1c] leading-snug">
          At Vexa Architect, we blend creativity and technology to deliver cutting-edge plan designs and immersive 3D visuals that bring ideas to life.{' '}
          <span className="text-[#caa9b9]">We’re shaping tomorrow’s spaces—together.</span>
        </p>
      </motion.div>
    </section>
  );
};

export default OurStory;
