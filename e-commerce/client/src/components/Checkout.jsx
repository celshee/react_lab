import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Banner from "./banner";

function Checkout() {
    const { state } = useLocation();
    const course = state?.course;

    if (!course) {
        return (
            <div className="text-center text-white text-xl p-10 bg-blue-950 min-h-screen">
                <h2>No course selected.</h2>
            </div>
        );
    }

    return (
        <div className="bg-blue-950 min-h-screen  p-4">
            <Banner />
            <div className="flex flex-row-reverse bg-emerald-200 font-bold text-2xl">
                <Navbar />
            </div>

            <div className="bg-white text-black p-6 mt-10 rounded-lg shadow-lg w-fit mx-auto">
                <img
                    src={course.img}
                    alt={course.name}
                    className="w-60 h-40 mb-4 rounded"
                />
                <h2 className="text-3xl font-bold mb-2">{course.name}</h2>
                <p className="mb-4">{course.description}</p>
                <p className="text-xl font-semibold">Price: ₹{course.price}</p>

                <div className="mt-6 text-green-600 font-semibold text-lg">
                    This course has been successfully added to your cart!
                </div>

                {/* Optional: Show Confirm button if you want user to reconfirm */}
                {/*
                <button
                    onClick={async () => {
                        await fetch("http://localhost:4000/add-to-cart", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(course),
                        });
                        alert("Course booked successfully!");
                    }}
                    className="mt-4 bg-blue-700 text-white px-4 py-2 rounded"
                >
                    Confirm Booking
                </button>
                */}
            </div>
        </div>
    );
}

export default Checkout;
