import React, { useState, useEffect } from 'react';
import '../styleling/banner.css';

function Complete() {
  const [list, setList] = useState([]);

  // Fetch completed tasks data from backend
  useEffect(() => {
    const fetchCompletedTasks = async () => {
      try {
        const response = await fetch('http://localhost:3000/completed');  // Replace with your backend URL
        if (response.ok) {
          const data = await response.json();
          setList(data); // Update the state with the fetched data
        } else {
          console.error('Failed to fetch completed tasks');
        }
      } catch (error) {
        console.error('Error fetching completed tasks:', error);
      }
    };

    fetchCompletedTasks();
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div>
      <h1 className='com'>Completed</h1>
      <div>
        {list.map((c, index) => (
          <div key={index}>
            <label>{c.todolist}</label> {/* Assuming 'c' has a 'todolist' property */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Complete;
