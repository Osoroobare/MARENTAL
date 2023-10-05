import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Osoro from "../../assets/Brian.jpg";
import Aluko from "../../assets/Osoro.jpg";
import Sankara from "../../assets/Sankara.jpg";
import Brian from "../../assets/Aluko.jpg";

const Team = (props) => {
  return (
    <div className="Credibility w-full max-w-[1440px] my-20 ">
      {/* section label */}
      <div className="pb-12 text-center">
        <h3 className="text-blue-700"> {props.header} </h3>
        <h5 className="pt-4"> {props.text} </h5>
      </div>

      <div className="flex flex-col justify-center  px-10 md:px-16 xl:px-[180px] sm:grid sm:grid-cols-2  lg:grid-cols-4 gap-10">
        <div className="TeamImageBox text-center">
          <div className="bg-zinc-800 rounded-br-none hover:border hover:border-zinc-300 duration-500 w-[220px] h-[220px] inline-block h-[220px] mr-2 overflow-hidden">
            <img className="w-full object-cover" src={Brian} alt="brian"></img>
          </div>
          <div className="inline-block">
            <h5 className="text-[24px] sm:text-[20px]">Brian O</h5>
            <div className="flex text-[30px]">
              <FaFacebook className="pr-2 hover:scale-105 cursor-pointer" />
              <FaTwitter className="pr-2 hover:scale-110 cursor-pointer" />
              <FaWhatsapp className="pr-2 hover:scale-105 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="TeamImageBox text-center">
          <div className="bg-zinc-800 rounded-br-none hover:border hover:border-zinc-300 duration-500 w-[220px] inline-block h-[220px] mr-2 overflow-hidden">
            <img className="w-full object-cover" src={Sankara} alt="Sankara"></img>
          </div>
          <div className="inline-block">
            <h5 className="text-[24px] sm:text-[20px]">Sank A</h5>
            <div className="flex text-[30px]">
              <FaFacebook className="pr-2 hover:scale-105 cursor-pointer" />
              <FaTwitter className="pr-2 hover:scale-110" />
              <FaWhatsapp className="pr-2 hover:scale-105 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="TeamImageBox text-center">
          <div className="bg-zinc-800 rounded-br-none hover:border hover:border-zinc-300 duration-500 w-[220px] inline-block h-[220px] mr-2 overflow-hidden">
            <img className="w-full object-cover" src={Aluko} alt="Aluko"></img>
          </div>
          <div className="inline-block">
            <h5 className="text-[24px] sm:text-[20px]">Aluko S</h5>
            <div className="flex text-[30px]">
              <FaFacebook className="pr-2 hover:scale-105 cursor-pointer" />
              <FaTwitter className="pr-2 hover:scale-110 cursor-pointer" />
              <FaWhatsapp className="pr-2 hover:scale-105 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="TeamImageBox text-center">
          <div className="bg-zinc-800 rounded-br-none hover:border hover:border-zinc-300 duration-500 w-[220px] h- [220px] inline-block h-[220px] mr-2 overflow-hidden">
            <img className="w-full object-cover" src={Osoro} alt="Osoro"></img>
          </div>
          <div className="inline-block">
            <h5 className="text-[24px] sm:text-[20px]">Osoro B</h5>
            <div className="flex text-[30px]">
              <FaFacebook className="pr-2 hover:scale-105 cursor-pointer" />
              <FaTwitter className="pr-2 hover:scale-110 cursor-pointer" />
              <FaWhatsapp className="pr-2 hover:scale-105 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
