import "./App.css";
import React, { useState } from "react";
import TodoForm from "./componenets/form/TodoForm";
import TodoList from "./componenets/list/TodoList";

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <TodoForm setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
