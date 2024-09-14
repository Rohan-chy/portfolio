import React from 'react';
import { FaEye } from 'react-icons/fa';
import edtech from '../assets/work/Edtech.png'
import travel from '../assets/work/travel.png'

const Work = () => {
  return (
    <section className="mt-10 py-20 px-8 lg:px-20">
      <div className="container mx-auto">
        <div className="relative">
          {/* Vertical 'work' text */}
          {/* <div className="absolute -left-10 top-8 transform -rotate-90">
            <h2 className="text-6xl font-bold text-gray-900">work</h2>
          </div> */}

          {/* Work Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left side content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-[32px] font-bold">Edtech Website</h3>
                <p className="text-lg text-gray-500">
                  kids edtech website for exploring hobby & art
                </p>
              </div>
              {/* Tags */}
              <div className="flex space-x-3">
                <span className="bg-[#373737] text-white px-3 py-1 rounded-lg">Web UI Design</span>
                <span className="bg-[#373737] text-white px-3 py-1 rounded-lg">Visual Design</span>
                <span className="bg-[#373737] text-white px-3 py-1 rounded-lg">Web Design</span>
              </div>
              {/* Live button */}
              <div>
                <button className="flex items-center bg-white border-2 border-gray-900 text-gray-900 px-4 py-2 rounded-xl">
                  Live <FaEye className="ml-2" />
                </button>
              </div>
            </div>

            {/* Right side content */}
              <img
                src={edtech} 
                alt="Edtech Website"
                className="rounded-lg"
              />

            {/* Travel Agency card */}
              <img
                src={travel}
                alt="Travel Agency"
                className="rounded-lg"
              />

            {/* Right side content for Travel Agency */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-4xl font-bold">Travel Agency</h3>
                <p className="text-lg text-gray-500">
                  Travel Agency that provides world tours
                </p>
              </div>
              {/* Tags */}
              <div className="flex space-x-3">
                <span className="bg-[#373737] text-white px-3 py-1 rounded-lg">Web UI Design</span>
                <span className="bg-[#373737] text-white px-3 py-1 rounded-lg">Visual Design</span>
                <span className="bg-[#373737] text-white px-3 py-1 rounded-lg">Web Design</span>
              </div>
              {/* Live button */}
              <div>
                <button className="flex items-center bg-white border-2 border-gray-900 text-gray-900 px-4 py-2 rounded-xl">
                  Live <FaEye className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
