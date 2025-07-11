import React from "react";
import ServiceHeader from "../components/ServiceHeader";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Service from "../components/Service";

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
