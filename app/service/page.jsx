import React from "react";
import ServiceHeader from "../components/ServiceHeader";
import Service from "../components/ServiceHome";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function ServicePage() {
  return (
    <div>
      <Navbar/>
      <ServiceHeader />
      <Service />
      <Footer />
    </div>
  );
}

export default ServicePage;
