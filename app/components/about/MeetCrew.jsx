'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Github, Globe } from 'lucide-react';

const crewMembers = [
  {
    image: '/images/rahil.png',
    name: 'Rahil',
    role: 'Creative Director',
    socials: {
      instagram: 'https://instagram.com/rahil',
      twitter: 'https://twitter.com/rahil',
      linkedin: 'https://linkedin.com/in/rahil',
    },
  },
  {
    image: '/images/safwan.png',
    name: 'Safwan',
    role: 'Lead Developer',
    socials: {
      github: 'https://github.com/safwan',
      linkedin: 'https://linkedin.com/in/safwan',
      website: 'https://safwan.dev',
    },
  },
  {
    image: '/images/ajnas.png',
    name: 'Ajnas',
    role: 'UI/UX Designer',
    socials: {
      instagram: 'https://instagram.com/ajnas',
      twitter: 'https://twitter.com/ajnas',
      linkedin: 'https://linkedin.com/in/ajnas',
    },
  },
  {
    image: '/images/fayas.png',
    name: 'Fayas',
    role: 'Backend Engineer',
    socials: {
      github: 'https://github.com/fayas',
      linkedin: 'https://linkedin.com/in/fayas',
      twitter: 'https://twitter.com/fayas',
    },
  },
  {
    image: '/images/sahad.png',
    name: 'Shahabas',
    role: 'Product Manager',
    socials: {
      linkedin: 'https://linkedin.com/in/sahad',
      twitter: 'https://twitter.com/sahad',
      instagram: 'https://instagram.com/sahad',
    },
  },
  {
    image: '/images/arshad.png',
    name: 'Arshad',
    role: 'Marketing Lead',
    socials: {
      instagram: 'https://instagram.com/arshad',
      linkedin: 'https://linkedin.com/in/arshad',
      twitter: 'https://twitter.com/arshad',
    },
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const getSocialIcon = (platform) => {
  switch (platform) {
    case 'instagram':
      return <Instagram size={20} />;
    case 'twitter':
      return <Twitter size={20} />;
    case 'linkedin':
      return <Linkedin size={20} />;
    case 'github':
      return <Github size={20} />;
    case 'website':
      return <Globe size={20} />;
    default:
      return <Globe size={20} />;
  }
};

export default function MeetCrew() {
  return (
    <section className="font-dominik w-full px-6 py-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mx-auto flex flex-col items-center justify-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl sm:text-6xl font-bold text-center leading-tight mb-16"
        >
          <span className="bg-primary bg-clip-text text-transparent">
            Meet the Crew!
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {crewMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={190}
                  height={180}
                  className="object-cover w-full h-full aspect-square transition-all duration-300 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Text & Icons on Hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 translate-y-4 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out">
                  <div className="text-white text-center mb-3">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    {/* <p className="text-sm text-gray-300">{member.role}</p> */}
                  </div>

                  <div className="flex justify-center gap-3">
                    {Object.entries(member.socials).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {getSocialIcon(platform)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
