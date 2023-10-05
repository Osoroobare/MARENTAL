import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Works = (props) => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto py-4 px-10 flex-col justify-between text-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            <div className="hover:border-2 border-zinc-400 duration-300  bg-zinc-900 rounded-tr-none h-48 overflow-hidden mr-6 text-center">
              <div className=" text-center  pt-6">
                <FaUserCircle className="text-blue-800 ml-32 mb-4 text-2xl" />
                <h6>Budget</h6>
                <p className="text-[12px]">Decide The Budget To Spend.</p>
                <p className="text-[12px]">
                  Talk to an Adviser{" "}
                  <a className="text-blue-600" href="">
                    Here
                  </a>
                </p>
              </div>
	    </div>
            <div className="hover:border-2 border-zinc-400 duration-300  bg-zinc-900 rounded-tr-none h-48 overflow-hidden mr-6">
              {" "}
              <div className=" text-center  pt-6">
                <FaUserCircle className="text-blue-800 ml-32 mb-4 text-2xl" />
                <h6>Find A Perfect House</h6>
                <p className="text-[12px]">
                  Use our search tool to find your perfect rental house in Narok.
                  <br />
                  <a className="text-blue-600" href="">
                    Explore Houses
                  </a>
                </p>
              </div>
            </div>
            <div className="hover:border-2 border-zinc-400 duration-300  bg-zinc-900 rounded-tr-none h-48 overflow-hidden mr-6">
              {" "}
              <div className=" text-center  pt-6">
                <FaUserCircle className="text-blue-800 ml-32 mb-4 text-2xl" />
                <h6>Make a Choice</h6>
                <p className="text-[12px]">
                  Meet with the Owner of you House of Choice.
                  <br />
                  <a className="text-blue-600" href="">
                    Meet an Owner
                  </a>
                </p>
              </div>
            </div>
            <div className="hover:border-2 border-zinc-400 duration-300  bg-zinc-900 rounded-tr-none h-48 overflow-hidden mr-6">
              {" "}
              <div className=" text-center  pt-6">
                <FaUserCircle className="text-blue-800 ml-32 mb-4 text-2xl" />
                <h6>Own The Home</h6>

                <p className="text-[12px]">
                  Get you House and Settle. 
                  <a className="text-blue-600" href="">
                    Testimonies
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
