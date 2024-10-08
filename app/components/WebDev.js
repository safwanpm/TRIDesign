'use client';

export default function WebDev() {
  return (
    <section className="  flex flex-col md:flex-row items-center justify-between  bg-[#0d3b66] w-full md:h-[700px]   rounded-3xl">
      {/* Left Side: Image */}
      <div className="relative md:w-2/4 flex flex-col justify-center items-center bg-[#faf0ca] md:h-[700px] md:rounded-s-3xl">
        {/* Top Image */}
        <img
          src="/images/Back 2.png" // Replace with your top image path
          alt="Top Banner"
          className="hidden md:block absolute  right-0 md:h-[700px]  "
        />
        
        {/* Main Image */}
        <img
          src="/images/laptop-min.png" // Replace with your image path
          alt="Website Showcase"
          className="w-3/4 md:w-3/4 rounded-lg overflow-hidden "
        />
      </div>

      {/* Right Side: Text and Tags */}
      <div className="md:w-2/4 text-white mt-8 md:mt-0 p-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Websites</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          {/* Tags */}
          <span className="bg-white text-purple-700 px-4 py-2 rounded-full">Next.JS</span>
          <span className="bg-white text-purple-700 px-4 py-2 rounded-full">HTML5</span>
          <span className="bg-white text-purple-700 px-4 py-2 rounded-full">Tailwind</span>
          <span className="bg-white text-purple-700 px-4 py-2 rounded-full">React</span>
          <span className="bg-white text-purple-700 px-4 py-2 rounded-full">Bootstrap</span>
          <span className="bg-white text-purple-700 px-4 py-2 rounded-full">Node.JS</span>
          
        </div>
        <p className="text-lg mb-6">
          We develop custom websites that stand out to international standards, ensuring quality and performance. 
          Using the latest technologies, we create websites that are visually appealing and highly functional.
          Bring your online presence to life with our customized development.
        </p>
        <a href="/website" className="bg-white  text-purple-700 px-6 py-3 rounded-full flex items-center gap-2">
          <span>View Our Recent Projects</span>
          <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
