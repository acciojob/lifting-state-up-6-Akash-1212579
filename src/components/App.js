
import React, { useState } from "react";
import './../styles/App.css';
import { TodoList } from "./TodoList";

const App = () => {
  const todosItems = [
    {
      id :1,
      text : "Learn React",
      isCompleted : false
    },
    {
      id :2,
      text : "Build a React app",
      isCompleted : false
    },
    {
      id :3,
      text : "Deploy the React app",
      isCompleted : false
    }
  ]
  const[todos,setTodos] = useState(todosItems);
  function handleComplete(id) {
  setTodos((prevTodos) => {
    const updatedTodos = [...prevTodos];
    const index = updatedTodos.findIndex(todo => todo.id === id);

    if (index !== -1) {
      updatedTodos[index] = {
        ...updatedTodos[index],
        isCompleted: true
      };
    }

    return updatedTodos;
  });
}
// console.log(todos);
  return (
    <div>
       <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete}/>
    </div>
  )
}

export default App
