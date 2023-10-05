import React from "react";
import Header from "../Header/Header";
import Service from "./Service";
import Footer from "../Footer/Footer";
import SearchBar from "../utils/SearchBar";
import Credibility from "./Credibility";
import Team from "./Team";

function About() {
  return (
    <div className=" About">
      <Header />
      <Service
        label="About MaRental"
        header="We Help You Get Your Next Rental Property In Narok"
        text= "New in Narok or looking to change houses and  in need of an efficient way of house hunting at the palm of your hands? Look no further! MaRentalis your one-stop solution for hassle-free  rentals search, designed to make your life easier."
      />

      <SearchBar header="Lets Do The Hunt For You" />
      <br className=""></br>
      <Credibility header="Why MaRental" text="Our Promise Is Commitment" />
      <Team header="Our Team" text="Meet The Hunters" />
      <Footer />
    </div>
  );
}

export default About;
