import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import brian from "../../assets/Brian.jpg"

const ExpertCard = (props) => {
  return (
    <div className="bg-zinc-800 pb-4 rounded-tr-none  hover:scale-105 duration-500">
      <div className="Image-wrapper w-full bg-zinc-500 rounded-tr-none w-[280px] h-[280px] overflow-hidden mb-4">
        <img className="w-full object-cover" src={brian} alt="" />
      </div>
      <div className=" pb-4 cursor-pointer flex justify-between align-middle pt-2 px-8">
        <p>{props.name}</p>
        <button className="rounded-full px-6">
          <NavLink className="text-l" to="/ownerDashboard">
            View
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default ExpertCard;
