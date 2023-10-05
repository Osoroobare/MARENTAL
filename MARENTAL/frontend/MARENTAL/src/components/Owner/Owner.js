import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import MoreProperty from "../Property/MoreProperty";
import SearchBar from "../utils/SearchBar";
// import FeaturedProperty from "../Property/FeaturedProperty";
import ExpertSection from "../utils/ExpertSection";

function Owner() {
  return (
    <div className="Owner">
      <Header />
      <Hero header="We have Registered Owners ready to support your goals" />

      <ExpertSection
        header="Meet the House Owners"
        text="We have certified experts ready to attend to you"
      />
      <SearchBar />
      <MoreProperty
        header="Properties"
        text="Find More houses that meets your need"
      />
        <div className="mt-20 rounded"></div>
      <Footer />
    </div>
  );
}

export default Owner;
