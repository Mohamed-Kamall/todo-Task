import React from "react";
import Task from "./Task";
import "./list.css";

export default function TodoList({ todo ,setTodo}) {
  const removeTask=(index)=>{
    const newTodos = [...todo];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  }
  return (
    <div className="todo-list-fill">
      {todo
        .map((item, index) => (
          <>
            <Task item={item} key={index} removeTask={removeTask} />
          </>
        )).reverse()
        }
    </div>
  );
}
