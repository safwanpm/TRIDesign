'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Bedroom Design',
    description:
      'We create serene and sophisticated bedrooms tailored to your lifestyle and spatial needs. Whether you seek a modern minimalist vibe or a luxurious retreat, our team ensures your bedroom feels restful and personalized.',
    image: '/images/fhome1.jpg',
  },
  {
    title: 'Living Room Concepts',
    description:
      'Our living room designs balance comfort, elegance, and personality. From cozy spaces perfect for family time to sophisticated lounges for entertaining, we deliver warmth, flow, and function in every corner.',
    image: '/images/fhome3.jpg',
  },
  // ...other services not shown for this preview
];

export default function ServiceHome() {
  return (
    <section className="text-black py-20 px-4 md:px-16 space-y-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="border-t border-b border-gray-400 py-6 mb-12"
      >
        <h2 className="text-5xl md:text-6xl font-light">Our Services</h2>
      </motion.div>

      {/* Intro Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl text-base md:text-lg text-gray-700 leading-relaxed"
      >
        From the heart of your home to the exterior walls that greet the world, our design services
        are curated to harmonize elegance with functionality. We thoughtfully shape each space to
        reflect your story, values, and lifestyle.
      </motion.p>

      {/* Show only 2 Services */}
      {services.slice(0, 2).map((service, i) => {
        const isEven = i % 2 === 0;
        return (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row ${
              !isEven ? 'md:flex-row-reverse' : ''
            } items-center gap-10`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={500}
                className="rounded-lg shadow-md w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        );
      })}

      {/* See More Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <Link
          href="/services"
          className="inline-flex items-center font-medium border-b border-gray-800 text-lg group"
        >
          <span className="mr-2">See More</span>
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}
