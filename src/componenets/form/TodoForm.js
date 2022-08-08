import React, { useState } from "react";
import "./formStyle.css";

export default function TodoForm({ setTodo }) {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    task &&
      setTodo((state) => [
        ...state,
        { task, timeStamp: new Date().toLocaleString() },
      ]);
    setTask("");
  };

  return (
    <div className="todo-form">
      <form>
        <div className="container-inp-butt">
          <input
            className="input"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="what's in your mind...."
          />
          <button className="button" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
