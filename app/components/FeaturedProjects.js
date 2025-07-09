'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Urban Masterplan',
    image: '/images/room1.jpg', // Replace with actual image
  },
  {
    title: 'City Skyline',
    image: '/images/room3.jpg', // Replace with actual image
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-secondary text-black py-20 px-4 md:px-16">
      <div className=" ">
        {/* Section Heading */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-light border-t border-b border-gray-300 py-4"
        >
          Featured Projects
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 text-gray-700 max-w-2xl text-base md:text-lg"
        >
          Archipelago&apos;s portfolio of city making projects, from expansive urban
          renewal to intimate residential spaces, showcases our innovative and
          people-centric approach to city making.
        </motion.p>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <Link
            href="/projects"
            className="inline-flex items-center font-semibold border-b border-gray-700 group"
          >
            <span className="text-lg mr-2">View All Projects</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </motion.svg>
          </Link>
        </motion.div>

        {/* Project Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="overflow-hidden group rounded-lg shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={600}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
