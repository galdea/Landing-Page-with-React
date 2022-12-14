import React from "react";
import NavbarExample from "./navbar";
import CardGrid from "./cardgrid";
import Footer from "./footer";
import Jumbo from "./jumbo";

const Home = () => {
  return (
    <>
      <div className="text-center">
        <NavbarExample />
      </div>
      <div className="container my-4">
        <Jumbo />
        <CardGrid />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
