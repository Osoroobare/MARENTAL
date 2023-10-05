import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import OwnerHeroBanner from "./OwnerHeroBanner";
import MoreProperty from "../Property/MoreProperty";
// import FeaturedProperty from "../Property/FeaturedProperty";
import ExpertSection from "../utils/ExpertSection";
import ListPropertyForm from "../Templates/ListPropertyForm";

function OwnerDashboard() {
  return (
    <div className="Owner">
      <Header />
      <OwnerHeroBanner
        header="Brian"
        text="Owns Residential Homes and Luxury apartments in Total Area."
        label="Contact Brian"
      />
      <MoreProperty header="Properties" text="Listed Properties By Brian" />
      {/* <FeaturedProperty
        header="Featured Properties"
        text="Top Rated Properties"
      /> */}

      <ListPropertyForm />

      <ExpertSection
        header="Meet The House Owners"
        text="We have certified owners ready to attend to you"
      />
      <Footer />
    </div>
  );
}

export default OwnerDashboard;
