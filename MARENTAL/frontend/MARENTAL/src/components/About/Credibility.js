import React, { useState } from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaToolbox } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { FaClock } from "react-icons/fa";
const Credibility = (props) => {
  return (
    <div className="Credibility w-full max-w-[1440px] my-20 ">
      {/* section label */}
      <div className="pb-6 text-center">
        <h3 className="text-blue-700"> {props.header} </h3>
        <h5 className="pt-4"> {props.text} </h5>
      </div>

      <div className="flex flex-col justify-center  px-10 md:px-16 sm:grid sm:grid-cols-2  lg:grid-cols-4 gap-10">
        <div className="text-center">
          <div className="bg-zinc-800 rounded-tr-none hover:border border-zinc-300 duration-500 text-center px-8 py-10 inline-block w-[280px] h-[280px]">
            <div className="flex text-[50px] mb-2 justify-center">
              <p>
                <VscWorkspaceTrusted />
              </p>
            </div>
            <h5 className=" text-blue-500 text-[20px] ">
              Transparent Pricing
            </h5>
            <p className="text-[18px]">
              Have a look at the prices.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-zinc-800 rounded-tr-none hover:border border-zinc-300 duration-500 text-center px-8 py-10 inline-block w-[280px] h-[280px]">
            <div className="flex text-[50px] mb-2 justify-center">
	      <div className="bg-zinc-300 p-2 rounded-full text-[33px]">
                 <GrUserExpert />
              </div>
            </div>
            <h5 className=" text-blue-500 text-[20px] ">Experts Only</h5>
            <p className="text-[18px]">
              Our Team is well trained to serve you.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-zinc-800 rounded-tr-none hover:border border-zinc-300 duration-500 text-center px-8 py-10 inline-block w-[280px] h-[280px]">
            <div className="flex text-[50px] mb-2 justify-center">
              <p>
                <FaToolbox />
              </p>
            </div>
            <h5 className=" text-blue-500 text-[20px] ">Fully Equiped</h5>
            <p className="text-[18px]">
              We bring all the expertise you require.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-zinc-800 rounded-tr-none hover:border border-zinc-300 duration-500 text-center px-8 py-10 inline-block w-[280px] h-[280px]">
            <div className="flex text-[50px] mb-2 justify-center">
              <p>
                <FaClock />
              </p>
            </div>
            <h5 className=" text-blue-500 text-[20px] ">Time Saving </h5>
            <p className="text-[18px]">
              We Provide Houses Which are Within Your Budget in a Timely Manner.
            </p>
          </div>
        </div>
      </div>
     </div>
  );
};

export default Credibility;
