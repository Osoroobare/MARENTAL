import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupIcon from "@mui/icons-material/Group";

const Service = (props) => {
  
  return (
    <div>
      <div className="max-w-[1440px] ml-16 mx-auto py-10 flex-col justify-between text-center md:flex-row relative" >
        {/* property-card-container */}
        <div classiName="grid md:grid-cols-2 gap-6 md:gap-10 py-10">
          <div>
            {/* section label */}
            <div className="p-6 md:text-left md:mt-[8s%]">
              <h3 className="text-blue-700 "> {props.label} </h3>
              <h2 className="md:max-w-[70%]font-bold mt-6 text-4xl">{props.header}</h2>
              <p className="text-2xl font-extralight mt-4"> {props.text} </p>
            </div>
          </div>
          <div className="md:ml-8 grid grid-cols-2 gap-4 md:gap-x-8 text-left mr-16">
            <div className="p-4 md:p-8 rounded-tr-none bg-zinc-800 px-8 py-10 inline-block hover:border hover:border-zinc-300 duration-500">
              <ApartmentIcon className="bigIcon text-blue-500 text-[20px]"></ApartmentIcon>
              <h4>Buy a House</h4>
              <p>With our vast search tool, you can find your dream house anywhere in Narok.</p>
            </div>

            <div className="p-4 md:p-8 rounded-tr-none bg-zinc-800 px-8 py-10 inline-block hover:border hover:border-zinc-300 duration-500">
              <ApartmentIcon className="bigIcon text-blue-500 text-[20px]"></ApartmentIcon>
              <h4> Rent a Shop</h4>
              <p>With our vast search tool, you can find your dream house anywhere in the Narok</p>
            </div>

            <div className="p-4 md:p-8 rounded-tr-none bg-zinc-800 px-8 py-10 inline-block hover:border hover:border-zinc-300 duration-500">
              <ApartmentIcon className="bigIcon text-blue-500 text-[20px]"></ApartmentIcon>
              <h4> Rent a House</h4>
              <p>With our vast search tool, you can find your dream house anywhere in Narok.</p>
            </div>

            <div className="p-4 md:p-8 rounded-tr-none bg-zinc-800 px-8 py-10 inline-block hover:border hover:border-zinc-300 duration-500">
              <GroupIcon className="bigIcon text-blue-500 text-[20px]"></GroupIcon>
              <h4>Talk To Owner</h4>
              <p>With our vast search tool, you can find your dream house anywhere in Narok.</p>
            </div>
          </div>
        </div>
        <div className="relative w-1/2 md:absolute top-[99%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <button className="mt-6 rounded">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
