import React from "react";
import { BsFillLightningChargeFill, BsCheck } from "react-icons/bs";
function Card() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-2xl mx-auto bg-[#173D86] rounded-xl overflow-hidden">
        <div className="flex flex-col  px-8 py-12  space-y-4">
          {/* the header of card goes here */}
          <div className="text-gray-100/70">
            <div className="flex items-center space-x-2">
              <BsFillLightningChargeFill className="text-xl text-teal-500" />
              <h5 className="font-semibold text-2xl">Ultimate</h5>
            </div>
            <p className="text-sm mt-1">Toolset for hard players</p>
          </div>
          {/* the middle of card goes here */}
          <div className="flex flex-col">
            <div className="flex space-x-2 mb-6">
              <h1 className="text-4xl font-semibold text-white self-end">
                $30
              </h1>
              <span className="self-end text-white text-sm">
                per seat/month
              </span>
            </div>
            <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-500 transition-all">
              Get Started
            </button>
          </div>
          {/* the footer of card goes here */}
          <div>
            <div>
              <h6 className="text-lg font-md text-white mb-4">
                Everything in Pro plus:
              </h6>
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-2 text-white">
                  <BsCheck className="text-[#23ADBD] text-2xl" />
                  <span>Daily performance reports</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <BsCheck className="text-[#23ADBD] text-2xl" />
                  <span>Dedicated assistant</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <BsCheck className="text-[#23ADBD] text-2xl" />
                  <span>Artificial intelligence</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <BsCheck className="text-[#23ADBD] text-2xl" />
                  <span>Marketing tools and automations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#1A345E] text-white text-center py-4">
          <h6>See all features</h6>
        </div>
      </div>
    </div>
  );
}

export default Card;
