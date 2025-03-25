import React, { useState } from "react";
import Waiter from "./Waiter";
function Dining() {

  const [booking, setBooking] = useState({ bookname: "", seats: "" });

  const [totalBookings, setTotal] = useState([]);
  const [seated, setSeated] = useState([]);

  const Bcard = ({ n, s }) => {
    return (
      <div className="p-4 border border-gray-300 rounded-xl mb-2 mt-2 w-fit h-fit bg-amber-100">
        <h3 className="text-lg font-bold">name:{n}</h3>
        <p>Seats: {s}</p>
        <input type="checkbox" onClick={() => {
            setSeated([...seated, n])
            setTotal(totalBookings.filter(temp=>temp.bookname!== n))
            }} />
        <label> is seated</label>
      </div>
    );
  };

  const handleBooking = () => {
    setTotal([...totalBookings, booking]);
    setBooking({ bookname: "", seats: "" });
  };

  return (
    <div className=" bg-blue-300 flex flex-col p-4 ">
      <h1 className="text-3xl font-bold">CUSTOMERS BOOKING</h1>
      <input
        type="text"
        onChange={(e) => {
          setBooking({ ...booking, bookname: e.target.value });
        }}
        value={booking.bookname}
        placeholder="enter your name"
        className="bg-amber-50 mt-2 w-50"
      />
      <input
        type="text"
        onChange={(e) => {
          setBooking({ ...booking, seats: e.target.value });
        }}
        value={booking.seats}
        placeholder="enter number of seats"
        className="bg-amber-50 mt-2 w-50"
      />
      <button onClick={handleBooking} className="rounded bg-gray-400 mt-2 w-20">
        submit
      </button>
      <div>
        {totalBookings.map((total, index) => {
          return <Bcard key={index} n={total.bookname} s={total.seats} />;
        })}
      </div>
      <div>
        <Waiter seatedarray={seated} />
      </div>
    </div>
  );
}

export default Dining;
