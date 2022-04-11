import React from "react";
import Footer from "../../Footer/Footer"
import Products from "../../Products/Products/Products"

// import Header from "../../Header/Header";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter"
import Question from "../Question/Question"
import Reviews from "../Reviews/Reviews"
import ShortSummary from "../ShortSummary/ShortSummary"

const Home = () => {
  return (
    <>
      <div className="w-100">
        
        <Banner />
        <Counter />
        <Products slice={6} />
        
        <ShortSummary />
        <div className="mt-5">

        <Reviews />
        </div>
        <Question />
        <Footer />
      </div>
    </>
  );
};

export default Home;
