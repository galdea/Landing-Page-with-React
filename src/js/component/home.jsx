import React from "react";
import NavbarExample from "./navbar";
import CardGrid from "./cardgrid";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <div className="text-center">
        <NavbarExample />
      </div>
      <div className="mx-5 my-4">
        <CardGrid />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
