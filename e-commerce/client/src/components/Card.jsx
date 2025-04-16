import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Model.jsx"  // Import the Modal component

function Card({ course }) {
    const [click, setClick] = useState(false);
    const [cname, setCname] = useState("");
    const navigate = useNavigate();

    const handleCheckout = async () => {
        try {
            const res = await fetch("http://localhost:4000/add-to-cart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(course),
            });

            if (res.ok) {
                setClick(true);
                setCname(course.name);

                // Optional: Navigate to checkout after 2 seconds
                setTimeout(() => {
                    navigate("/checkout", { state: { course } });
                }, 2000);
            } else {
                alert("Failed to add to cart.");
            }
        } catch (error) {
            console.error("Error adding to cart:", error);
            alert("Something went wrong!");
        }
    };

    // Close modal
    const closeModal = () => setClick(false);

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 relative">
            <div className="p-2 content-center">
                <img
                    className="p-8 rounded-t-lg w-50 h-40"
                    src={course.img}
                    alt={course.name}
                />
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
                        onClick={handleCheckout}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
            {click && <Modal cname={cname} closeModal={closeModal} />}
        </div>
    );
}

export default Card;
