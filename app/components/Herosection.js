'use client';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center w-full h-screen bg-">
            {/* Animated Image */}
            <motion.img
                src="/images/lap.gif" // Replace with your image path
                alt="Animated Icons"
                className="w-3/4 md:w-1/6 mb-8"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            />

            {/* Centered Text */}
            <div className="text-center p-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">

                    Empower Your Vision with  <br/>
                    <span className="text-transparent bg-clip-text bg-primary-gradient">
                        Cutting-Edge Solutions.
                    </span>
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-600">
                    Web Development, 3D Visualization.
                </p>

                <button className="mt-8 px-6 py-3 rounded-full bg-primary-gradient text-white text-lg hover:scale-105 transform transition duration-300">
                    Let's Get Started!
                </button>
            </div>
        </section>
    );
}
