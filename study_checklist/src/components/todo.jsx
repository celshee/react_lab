import React, { useState } from "react";
import "../styleling/banner.css";
import Complete from "./completed";
function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [clist, setClist] = useState([]);
  function handlecomplete(t) {
    setClist([...clist, t]);
    setTodos(todos.filter((num) => num !== t));
  }

  function Listings() {
    return (
      <div>
        {todos.map((todo, index) => {
          return (
            <div>
              <input
                key={index}
                type="checkbox"
                onClick={() => handlecomplete(todo)}
              />
              <label>{todo}</label>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div >
      <h1 className="todo">Planned</h1>
      <textarea  value={input} onChange={(e) => setInput(e.target.value)}></textarea>
      <button
        onClick={() => {
          setTodos([...todos, input]);
          setInput("");
        }}
      >
        submit
      </button>
      <div>
        <Listings />
      </div>
      <Complete list={clist} />
    </div>
  );
}

export default Todo;

// function poplist(value){
//   return (
//     <div>
//       let complete=todos.pop(value);
//       setTodos(todos)
//       <completed done={complete}/>
//     </div>
//   )

// }
