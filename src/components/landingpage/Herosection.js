
import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gradient-to-r from-white to-blue-50">
      <div className="max-w-xl">
        <h2 className="text-5xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 leading-tight">
          Revolutionizing Healthcare & Medical Education
        </h2>
        <p className="text-gray-600 mt-6">
          SecureMed AI+ combines cutting-edge AI technology with specialized tools for both medical professionals and students, reducing administrative load and enhancing diagnostic accuracy while providing an immersive educational environment.
        </p>
        <div className="flex items-center space-x-4 mt-8">
          <button className="bg-purple-500 text-white px-6 py-3 rounded-md shadow hover:bg-purple-600 transition">
            Get Started →
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-md text-gray-700 hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
        <div className="flex items-center space-x-2 mt-6">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 bg-purple-400 text-white flex items-center justify-center rounded-full text-sm font-bold">DF</div>
            <div className="w-8 h-8 bg-cyan-500 text-white flex items-center justify-center rounded-full text-sm font-bold">M</div>
            <div className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center rounded-full text-sm font-bold">JR</div>
            <div className="w-8 h-8 bg-blue-200 text-gray-800 flex items-center justify-center rounded-full text-lg font-bold">+</div>
          </div>
          <span className="text-sm text-gray-500">Trusted by 3,000+ medical professionals and students</span>
        </div>
      </div>
      <div className="mt-12 md:mt-0 md:ml-12">
        <img/>
      </div>
    </section>
  );
};

export default HeroSection;
