import React from "react";
import ExpertCard from "./ExpertCard";
import { NavLink } from "react-router-dom";

const ExpertSection = (props) => {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto py-20 px-10 flex-col justify-between text-center md:flex-row">
        {/* section label */}
        <div className="py-10">
          <h3 className="text-blue-700"> {props.header} </h3>
          <h5 className="pt-4"> {props.text} </h5>
        </div>

        {/* property-card-container */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-2">
            <ExpertCard name="Brian" linkedin="" contact=""/>
          </div>
          <div className="p-2">
            <ExpertCard name="Osoro" linkedin="" contact="" />
          </div>
          <div className="p-2">
            <ExpertCard name="Sankara" linkedin="" contact="" />
          </div>
          <div className="p-2">
            <ExpertCard name="Aluko" linkedin="" contact="" />
          </div>
        </div>
        <div className="rounded-full w-full pt-12 flex justify-center">
          <button className="rounded-full px-6">
            <NavLink className="" to="/ownerForm">
              Become an Owner
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertSection;
