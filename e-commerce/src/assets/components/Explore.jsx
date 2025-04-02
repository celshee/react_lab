import React from "react";
import Navbar from "../components/navbar";
import Banner from "./banner";
import Card from "./Card";
import images from "../images/images";
import Modal from "./Card"
function Explore() {
  const courses = [
    {
      name: "Full-Stack Web Development",
      description:
        "Learn MERN stack (MongoDB, Express, React, Node.js) and build scalable web applications.",
        img:images.fs,
      price: 14999,
    },
    {
      name: "Data Structures & Algorithms",
      description:
        "Master DSA with hands-on coding and problem-solving in Java.",
        img:images.bc,
      price: 12999,
    },
    {
      name: "Native Mobile App Development",
      description:
        "Create cross-platform mobile apps using React Native with real-world projects.",
        img:images.react,
      price: 15999,
    },
    {
      name: "Machine Learning with Python",
      description:
        "Dive into ML concepts, build predictive models, and explore deep learning.",
        img:images.py,
      price: 17999,
    },
    {
      name: "Cybersecurity & Ethical Hacking",
      description:
        "Learn penetration testing, network security, and ethical hacking techniques.",
        img:images.img,
      price: 19999,
    },
  ];

  return (
    <div className="bg-blue-950 ">
      <Banner />
      <div className="flex flex-row-reverse bg-emerald-200 font-bold text-2xl ">
        <Navbar />
      </div>
      <div className="flex flex-wrap p-2 ">
      {courses.map((course, index) => {
        return (
          <div className='h-80 w-100 p-4 mt-3 mb-20' key={index}>
            <Card course={course} />
          </div>
        );
      })}
      </div>

    </div>
  );
}

export default Explore;
