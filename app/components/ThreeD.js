'use client';

export default function ThreeD() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full md:h-[600px] bg-secondary-gradient p-8 rounded-3xl">
      {/* Left Side: Image */}
    
      <div className="md:w-2/4 text-white mt-12 md:mt-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">3D Visualising</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          {/* Tags */}
          <span className="bg-white text-purple-700 px-4 py-2 rounded-full">Autocad</span>
          <span className="bg-white text-purple-700 px-4 py-2 rounded-full">3ds Max</span>
          <span className="bg-white text-purple-700 px-4 py-2 rounded-full">SketchUp</span>
          <span className="bg-white text-purple-700 px-4 py-2 rounded-full">Revit</span>
          <span className="bg-white text-purple-700 px-4 py-2 rounded-full">Lumion</span>
          <span className="bg-white text-purple-700 px-4 py-2 rounded-full">Corona</span>
          <span className="bg-white text-purple-700 px-4 py-2 rounded-full">Drafting</span>
          <span className="bg-white text-purple-700 px-4 py-2 rounded-full">Photoshop</span>
        </div>
        <p className="text-lg mb-6">
          Our 3D visualizing services bring your architectural designs to life. Using the latest software like AutoCAD, 
          3ds Max, and SketchUp, we create immersive visuals that allow you to see your projects in stunning detail. 
          Whether it's drafting or photorealistic rendering, we ensure the highest quality in every aspect of 3D modeling.
        </p>
        <button className="bg-white text-purple-700 px-6 py-3 rounded-full flex items-center gap-2">
          <span>View Our Recent Projects</span>
          <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </div>
      {/* Right Side: Text and Tags */}
      <div className="md:w-2/4 flex justify-center items-center">
        <img
         src="/images/lap.gif" // Replace with your image path
          alt="Website Showcase"
          className="w-3/4 md:w-3/4 rounded-lg"
        />
      </div>
    
    </section>
  );
}
