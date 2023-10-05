import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import SearchBar from "../utils/SearchBar";

function Blog() {
  return (
    <div className=" Blog">
      <Header />
      <Hero
        header = "MARENTAL Your Onestop Rental Solution"
	text="This is our blog. Follow us for more updates on housing, the latest trends and many more. Feel free to explore"
       />
       <div className="pt-10 pb-[100px] text-center">
       <searchBar />
    </div> 
    <Footer />
  </div>
  );
}

export default Blog;
