import React from "react";
import { GiSpookyHouse, GiTreehouse, GiSydneyOperaHouse, GiFamilyHouse } from "react-icons/gi";

const Partners = () => {
  return (
    <div className="Patners">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto py-4 px-10 flex-col justify-between text-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            <div className="flex">
              <GiSpookyHouse className="text-3xl mr-4 text-blue-600" />
              <span>Dansa Houses</span>
            </div>
            <div className="flex">
              <GiTreehouse className="text-3xl mr-4 text-blue-600" />
              <p>Breeze Houses</p>
            </div>
            <div className="flex">
              <GiSydneyOperaHouse className="text-3xl mr-4 text-blue-600" />
              <p>Total Luxuries</p>
            </div>
            <div className="flex">
              <GiFamilyHouse className="text-3xl mr-4 text-blue-600" />
              <p>Polunga Suites</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
