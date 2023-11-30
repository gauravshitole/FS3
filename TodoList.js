// TodoList.js
import React, { useState } from 'react';

const TodoList = () => {
  // State for managing tasks
  const [tasks, setTasks] = useState([]);
  // State for managing the input value in the form
  const [taskInput, setTaskInput] = useState('');

  // Function to handle task addition
  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  // Function to handle task removal
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Slip 3</h1>
      <h2>Todo List</h2>

      {/* Task input form */}
      <div>
        <input
          type="text"
          placeholder="Enter a new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Display tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>
              <span role="img" aria-label="Delete">
                🗑️
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Display total number of tasks */}
      <p>Total Tasks: {tasks.length}</p>
    </div>
  );
};
export default TodoList;


