import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styleling/banner.css";
import Complete from "./completed";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [clist, setClist] = useState([]);

  // Fetch the todos and completed tasks from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch todos (GET /planned)
        const todosResponse = await axios.get("http://localhost:3000/planned");
        setTodos(todosResponse.data); // Set the todos in state

        // Fetch completed tasks (GET /completed)
        const completedResponse = await axios.get("http://localhost:3000/completed");
        setClist(completedResponse.data); // Set the completed tasks in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Handle marking a todo as completed (POST /complete)
  const handleComplete = async (t) => {
    try {
      // Add to the completed list in the backend
      await axios.post("http://localhost:3000/complete", { todo: t });

      // Remove from the planned list in the backend
      await axios.post("http://localhost:3000/planned", { todo: t });

      // Update local state
      setClist([...clist, t]);
      setTodos(todos.filter((todo) => todo !== t));
    } catch (error) {
      console.error("Error handling complete:", error);
    }
  };

  // Handle adding a new todo (POST /planned)
  const handleSubmit = async () => {
    if (input.trim()) {
      try {
        // Send new todo to backend (POST /planned)
        await axios.post("http://localhost:3000/planned", { todo: input });

        // Update local state
        setTodos([...todos, input]);
        setInput("");
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }
  };

  return (
    <div>
      <h1 className="todo">Planned</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your todo"
      />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <input
              type="checkbox"
              onClick={() => handleComplete(todo)}
            />
            <label>{todo}</label>
          </div>
        ))}
      </div>
      <Complete list={clist} />
    </div>
  );
}

export default Todo;
