"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Navbar() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true,     // Animation will happen only once
        });
    }, []);
    return (
        <nav className="fixed top-0 w-full  backdrop-blur-sm z-50 " data-aos="fade-down">
            <div className="container mx-auto py-4 md:py-8">
                <h1 className="  text-2xl md:text-3xl font-bold leading-tight text-center 
        text-transparent bg-clip-text bg-primary-gradient  font-family:Roboto Slab, serif">
                    <a href="/">TRI DESIGN</a>
                </h1> </div>
        </nav>
    );
}
