'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Bedroom Design',
    description: 'We create serene and sophisticated bedrooms tailored to your lifestyle and spatial needs.',
    image: '/images/fhome1.jpg',
  },
  {
    title: 'Living Room Concepts',
    description: 'Our living room designs balance comfort, elegance, and personality, offering a space to unwind or entertain.',
    image: '/images/fhome1.jpg',
  },
  {
    title: 'Kitchen Interiors',
    description: 'We design modern, functional kitchens that blend aesthetic appeal with smart utility.',
    image: '/images/fhome3.jpg',
  },
  {
    title: 'Bathroom Aesthetics',
    description: 'From compact bathrooms to spa-inspired spaces, we craft designs with luxury and practicality in mind.',
    image: '/images/fhome2.jpg',
  },
  {
    title: 'Exterior Styling',
    description: 'We enhance curb appeal and structure harmony through stunning exterior visualizations.',
    image: '/images/fhome1.jpg',
  },
 
];

export default function Service() {
  return (
    <section className=" text-black py-20 px-4 md:px-16 space-y-24">
      {/* Heading */}
      

      {/* Intro Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl text-base md:text-lg text-gray-700 leading-relaxed"
      >
        From the heart of your home to the exterior walls that greet the world, our interior and exterior design services are crafted to harmonize elegance with function. We blend creativity with practical expertise to shape spaces that reflect your identity and lifestyle.
      </motion.p>

      {/* Alternating Image + Content */}
      {services.map((service, i) => {
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
    </section>
  );
}
