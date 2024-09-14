import React from 'react';
import { FiDownload } from "react-icons/fi";
import tu from "../assets/Frame 1.png" 

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-start gap-4 space-y-4">
          <div className="text-left flex flex-col justify-center items-start gap-4">
            <p className="text-[36px] text-[#373737]">Hello World! My name is</p>
            <h1 className="text-[60px] font-bold">Tribhuban Chaudhary</h1>
            <p className="text-[24px] text-gray-600">UI/UX Designer</p>
          </div>
          <button className="mt-4 flex items-center px-6 py-3 bg-[#373737] text-white text-[24px] rounded-lg shadow hover:bg-gray-700">
            Download CV <FiDownload className="ml-2" />
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={tu}// Replace with actual image URL
            alt="Tribhuban Chaudhary"
            className="rounded-lg shadow-lg max-w-xs md:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
