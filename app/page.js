'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Inter } from "@next/font/google";
import Contact from "./components/Contact";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";
import HeroSection from "./components/FeaturedProjects";
import Navbar from "./components/Navbar";
import ThreeDdesign from "./components/ThreeD";
import WebDev from "./components/WebDev";
import SwiperComp from "./components/swiper";
import { Hero } from "./components/Hero";
import Loader from "./components/Loader";
import FeaturedProjects from "./components/FeaturedProjects";
import Service from "./components/ServiceHome";
import ServiceHome from "./components/ServiceHome";
import AboutHome from "./components/AboutHome";

const inter = Inter({ subsets: ['latin'] });
export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis({

        lerp: 0.05,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }
  }, []);

  return (
    <div className={` overflow-hidden`}>
      <Loader /> {/* ⬅️ Loading screen here */}
      <Navbar />


      <Hero />
      <FeaturedProjects />
      <AboutHome/>
      <ServiceHome/>
      <Contact />


      <Footer />
    </div>
  );
}

