import React from "react";
import Navbar from "./navbar.jsx";
import Banner from "./banner.jsx";
function About() {
  return (
    <div className="bg-blue-950 h-screen">
      <Banner />
      <div className="flex flex-row-reverse bg-emerald-200 font-bold text-2xl ">
        <Navbar />
      </div>
    </div>
  );
}

export default About;
