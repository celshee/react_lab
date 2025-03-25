import React, { useState } from "react";

function Waiter(props) {
  const [order, setOrder] = useState([]);
  
  const handleOrder = (n, dish) => {
    if (!dish.trim()) return;

    setOrder((prevOrders) => [
      ...prevOrders,
      { bookname: n, dishes: [dish] }
    ]);

    setDish(""); 
  };

  const Wcard = ({ n }) => {
    const [dish, setDish] = useState("");
    return (
      <div className="p-4 border border-gray-300 rounded mb-2 mt-2  w-fit h-fit bg-amber-100">
        <h3 className="text-lg font-bold">name:{n}</h3>
        <input
          type="text"
          onChange={(e) => {
            setDish(e.target.value);
          }}
          value={dish}
          placeholder="order here "
          className="bg-gray-400 mt-2 rounded-md w-50"
        />
         <button onClick={()=>{handleOrder(n,dish);
        setDish("");}
         } className="bg-gray-400  rounded-md ml-2 mt-2 w-20">submit</button>
      </div>
    );
  };

  return (
    <div className="fgbg-red-400 flex flex-col p-4 ">
      <h1 className="text-3xl font-bold">Dining</h1>

     
      <div>
        {props.seatedarray.map((seated, index) => {
          return <Wcard key={index} n={seated} />;
        })}
      </div>
      
      <h2 className="text-2xl font-bold mt-4">Orders</h2>
      {order.map((o, index) => (
        <p key={index}>
          {o.bookname} ordered: {o.dishes.join(", ")}
        </p>
      ))}

    </div>
  );
}

export default Waiter;
