import React from 'react';
import { LuSend } from "react-icons/lu";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-full max-w-md bg-white rounded-lg border border-[#373737] p-8">
        {/* <div className="absolute left-[-50px] top-[40%] rotate-[-90deg]">
          <span className="font-bold text-lg tracking-widest text-gray-600">contact</span>
        </div> */}

        <form className="flex flex-col gap-6 space-y-4 ">
          {/* Name Input */}
          <div>
            <input
              type="text"
              placeholder="name"
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="email"
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-500"
            />
          </div>

          {/* Subject Input */}
          <div>
            <input
              type="text"
              placeholder="subject"
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-500"
            />
          </div>

          {/* Message Input */}
          <div>
            <textarea
              placeholder="message"
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-500"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-8 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Send <LuSend/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
