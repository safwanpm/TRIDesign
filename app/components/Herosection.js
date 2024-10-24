'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true,     // Animation will happen only once
        });
    }, []);

    return (
        <section className="flex flex-col items-center justify-center w-full h-screen">
            {/* Animated Image */}
            <img
                src="/images/lap.gif" 
                alt="Animated Icons"
                className="w-3/4 md:w-1/6 mb-8"
                data-aos="zoom-in"
            />

            {/* Centered Text */}
            <div className="text-center p-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800" data-aos="zoom-in">
                    Empower Your Vision with <br />
                    <span className="text-transparent bg-clip-text bg-primary-gradient">
                        Cutting-Edge Solutions.
                    </span>
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-600" data-aos="zoom-in">
                    Web Development, 3D Visualization.
                </p>

                <button className="mt-8 px-6 py-3 rounded-full bg-primary-gradient
                 text-white text-lg hover:scale-105 transform transition duration-300" data-aos="fade-up">
                    Scroll Now!
                </button>
            </div>
        </section>
    );
}
