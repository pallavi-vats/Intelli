import React, { useState } from "react";

export default function Task() {
  // Current Date (always today)
  const today = new Date().toISOString().split("T")[0];

  // All tasks
  const [tasks, setTasks] = useState([]);

  // New Task details
  const [taskText, setTaskText] = useState("");
  const [status, setStatus] = useState("To-Do"); // default fixed

  // Editing state
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [editStatus, setEditStatus] = useState("To-Do"); // default fixed

  // Add Task
  const addTask = () => {
    if (taskText.trim() === "") return alert("Task cannot be empty");

    const newTask = {
      date: today,
      text: taskText,
      status,
    };

    setTasks([...tasks, newTask]);
    setTaskText("");        // reset input
    setStatus("To-Do");     // reset to default
  };

  // Save edited task
  const updateTask = () => {
    const updated = [...tasks];
    updated[editIndex] = {
      ...updated[editIndex],
      text: editText,
      status: editStatus,
    };

    setTasks(updated);
    setEditIndex(null);
    setEditText("");
    setEditStatus("To-Do"); // reset after edit
  };

  // Delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-[#0E0E0E] rounded-xl shadow-lg text-white">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-[#2EC866] mb-6">Task Scheduler</h1>

      {/* ADD NEW TASK FORM */}
      <div className="bg-[#1A1A1A] p-5 rounded-lg mb-6">

        {/* Current Date */}
        <p className="text-gray-300 mb-2">Today: {today}</p>

        <input
          type="text"
          placeholder="Enter task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="w-full mb-3 p-3 bg-[#0E0E0E] border border-gray-600 rounded-lg text-gray-200"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full mb-3 p-3 bg-[#0E0E0E] border border-gray-600 rounded-lg text-gray-200"
        >
          <option>To-Do</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>

        <button
          onClick={addTask}
          className="w-full bg-[#2EC866] text-black font-semibold py-3 rounded-lg hover:bg-white transition"
        >
          Add Task
        </button>
      </div>

      {/* TASK TABLE */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#1A1A1A] text-gray-300">
            <th className="p-3">Date</th>
            <th className="p-3">Task</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center text-gray-400 py-4">
                No tasks added yet.
              </td>
            </tr>
          ) : (
            tasks.map((task, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="p-3">{task.date}</td>

                <td className="p-3">
                  {editIndex === index ? (
                    <input
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="p-2 bg-[#0E0E0E] border border-gray-600 rounded-lg w-full"
                    />
                  ) : (
                    task.text
                  )}
                </td>

                <td className="p-3">
                  {editIndex === index ? (
                    <select
                      value={editStatus}
                      onChange={(e) => setEditStatus(e.target.value)}
                      className="p-2 bg-[#0E0E0E] border border-gray-600 rounded-lg"
                    >
                      <option>To-Do</option>
                      <option>Pending</option>
                      <option>Completed</option>
                    </select>
                  ) : (
                    <span
                      className={
                        task.status === "Completed"
                          ? "text-green-400 font-medium"
                          : task.status === "Pending"
                          ? "text-yellow-400 font-medium"
                          : "text-gray-300 font-medium"
                      }
                    >
                      {task.status}
                    </span>
                  )}
                </td>

                <td className="p-3 flex gap-3">
                  {editIndex === index ? (
                    <button
                      onClick={updateTask}
                      className="px-3 py-1 bg-blue-500 text-black rounded hover:bg-blue-400"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setEditIndex(index);
                        setEditText(task.text);
                        setEditStatus(task.status);
                      }}
                      className="px-3 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-400"
                    >
                      Edit
                    </button>
                  )}

                  <button
                    onClick={() => deleteTask(index)}
                    className="px-3 py-1 bg-red-500 text-black rounded hover:bg-red-400"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

    </div>
  );
}
