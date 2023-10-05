import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeroImageBox from "../utils/HeroImageBox";
import SearchButton from "../utils/SearchButton";
import MoreProperty from "../Property/MoreProperty";
import ExpertSection from "../utils/ExpertSection";
import Works from "../utils/Works";
import Service from "../About/Service";
import Partners from "../utils/Partners";
import useFetch from "../utils/useFetch";
import FeaturedProperty from "../Property/FeaturedProperty";
import house2 from "../../assets/h2.jpg";
import ExpertCard from "../utils/ExpertCard";

function Home() {

  const {items} = useFetch()

  return (
    <div className="Home">
      <Header />
      <section className="ml-16 mr-16">
        <div className="max-w-[1440px] mx-auto py-10 px-10  md:flex justify-between">
          <div className="md:grid text-center md:text-left grid-cols-2 gap-10">
            <div className="my-10  md:my-auto">
              <h1 className="pb-8 text-4xl md:text-6xl">New In Narok, Find Your Next House</h1>
              <p className="full-rounded px-6">Lets help you find you a house to Rent</p>
              <SearchButton />
            </div>
               {<HeroImageBox p="Rent Your House of Choice" url ={house2} />}
	       {/*<HeroImageBox p="Featured House" url ={false | require("../../assets/Zeliq.jpg")}/> */}
          </div>
        </div>
      </section>

      <section className="bg-black  text-white flex">
        <div className="max-w-[1440px] mx-auto py-10 px-10  md:flex justify-between">
          <Service
            label="About MaRental"
            header="Let us do the Hunting For You"
            text="New in Narok or looking to change houses and  in need of an efficient way of house hunting at the palm of your hands? Look no further! MaRental is your one-stop solution for hassle-free  rentals search, designed to make your life easier."
          />
        </div>
      </section>

      <section className="bg-grey text-white">
      <FeaturedProperty header="Featured Properties" text="Check Out The top rated Rentals In Narok " items={items} />
      </section>
      <section className="bg-grey  text-white">
        <div className="text-center pt-20">
          <h3 className="text-blue-700 text-2xl">How it Works</h3>
          <p className="mb-12">Confidence in Collaboration</p>
        </div>
        <Works />
      </section>
      <section className="bg-grey text-white">
        <div className="text-center pt-20">
          <h3 className="text-blue-700 text-2xl">Meet an Owner</h3>
          <p>Do you need any advice from an owner?</p>
          <p>Here is a Chance To Meet Them </p>
        </div>
        <ExpertSection />
      </section>
      <section className="bg-grey text-white">
        <div className="text-center pt-14">
          <h3 className="text-blue-700 text-2xl">Our House Owners</h3>
          <p className="mb-12">We have strong partnership with renowned owners and their organizations.</p>
        </div>
        <Partners />
      </section>
      <section className="bg-grey  text-center pt-16">
        <h3 className="text-blue-700 text-2xl ">Got a Question?</h3>
        <p className="mb-20 text-white">Let us help you.</p>
        <Footer />
      </section>
    </div>
  );
}

export default Home
