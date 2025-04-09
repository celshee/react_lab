import React, { useEffect, useState } from "react";

function Card({ course }) {

const [click,setClick]=useState(false);
const [cname,setCname]=useState("");


const Modal=()=>{
  return(
    <div className="bg-opacity-20 bg-white w-fit h-fit align-middle items-center justify-center shadow-lg">
     <h1> {cname} is booked successfully !! </h1>
     <button className="text-white bg-blue-700 focus:ring-blue-300 
                      font-medium rounded-lg text-sm px-5 py-2.5 text-center "
     onClick={()=>setClick(false)}>close</button>
    </div>
  )
}

  return (
    <div className="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="p-2 content-center">
        <img className="p-8 rounded-t-lg w-50 h-40 " src={course.img}/>
      </div>
      <div className="px-5 pb-5">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {course.name}
        </h2>
        <p className="text-gray-500 dark:text-gray-400">{course.description}</p>

        <div className="flex items-center justify-between mt-5">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ₹{course.price}
          </span>
          <button
            onClick={()=>{
              setCname(course.name);
              setClick(true)
            }}
            className="text-white bg-blue-700 focus:ring-blue-300 
                      font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Add to cart
          </button>
        </div>
      </div>
      {click && <Modal />}

    </div>
  );
}

export default Card;

// src={course.image} alt={course.name}
