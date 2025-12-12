import React, { useState } from "react";
import "../css/task.css";

function Tasks() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTaskList([...taskList, task]);
    setTask("");
  };

  return (
    <div className="task-container">
      <h2>Today's Tasks</h2>

      <div className="task-top">
        <input
          type="text"
          className="task-input"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="task-button" onClick={addTask}>
          Add Task
        </button>
      </div>

      <div className="task-list">
        <h3>Task List:</h3>

        {taskList.length === 0 && <p>No tasks yet.</p>}

        <ul>
          {taskList.map((item, index) => (
            <li key={index} className="task-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tasks;
