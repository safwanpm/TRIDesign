import { Inter } from "@next/font/google";
import Contact from "./components/Contact";
import Crew from "./components/Crew";
import Footer from "./components/Footer";
import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";
import ThreeDdesign from "./components/ThreeD";
import WebDev from "./components/WebDev";
import SwiperComp from "./components/swiper";

const inter = Inter({ subsets: ['latin'] });
export default function Home() {


  return (
    <div className={` overflow-hidden`}>
      <Navbar />
      <div> 
        <HeroSection />
      </div>
      {/* <div>
        <SwiperComp />
      </div> */}
      <div className="p-4 md:p-16">
        <WebDev />
      </div>
      <div className="p-4 md:p-16">
        <ThreeDdesign />
      </div>
      {/* <div className="px-6 md:px-16">
        <Crew />
      </div> */}
      <div className="px-16">
        <Contact />
      </div>
     
      <Footer />
    </div>
  );
}

