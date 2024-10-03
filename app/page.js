import Contact from "./components/Contact";
import Crew from "./components/Crew";
import Footer from "./components/Footer";
import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";
import ThreeD from "./components/ThreeD";
import WebDev from "./components/WebDev";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div> {/* Add margin-top to avoid content hiding behind the navbar */}
        <HeroSection />
        {/* Other content */}
      </div>
      <div className="p-4 md:p-16"> {/* Add margin-top to avoid content hiding behind the navbar */}
        <WebDev />
        {/* Other content */}
      </div>
      <div className="p-4 md:p-16"> {/* Add margin-top to avoid content hiding behind the navbar */}
        <ThreeD />
        {/* Other content */}
      </div>
      <Crew/>
      <Contact/>
      <Footer/>
    </div>
  );
}
