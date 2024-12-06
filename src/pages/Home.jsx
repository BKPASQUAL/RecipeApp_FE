import React from "react";
import Navbar from "../components/common/Navbar";
import ReceptTypes from "../components/home/ReceptTypes";

function Home() {
  return (
    <>
    <Navbar/>
      <div className="px-28">
        <ReceptTypes/>
      </div>
    </>
  );
}

export default Home;
