//import React, { useState } from "react";
import PropertyCard from "../utils/PropertyCard";
import useFetch from "../utils/useFetch";

const MoreProperty = () => {
  const { items } = useFetch();

  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto py-4 px-10 flex-col justify-between text-center md:flex-row">
        {/* section label */}
        <div className="py-10">
          <h3 className="text-blue-700"> {items.header} </h3>
          <h5 className="pt-2"> {items.text} </h5>
        </div>
        {/* property-card-container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map(({ id, title, url, price, purpose, state }) => (
            <div className="p-10" key={id}>
              <PropertyCard img={url} price={price} state={state} purpose={purpose} title={title} />
            </div>
          ))}
        </div>
        <div className="w-full pt-10 full-rounded px-6">
          <button>Load More</button>
        </div>
      </div>
    </div>
  );
};

export default MoreProperty;
