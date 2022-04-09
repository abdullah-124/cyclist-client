import React from "react";
import Footer from "../../Footer/Footer"
import Products from "../../Products/Products/Products"

// import Header from "../../Header/Header";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews"

const Home = () => {
  return (
    <>
      <div className="w-100">
        
        <Banner />
        <Products slice={6} />
        <Reviews />
        <Footer />
      </div>
    </>
  );
};

export default Home;
