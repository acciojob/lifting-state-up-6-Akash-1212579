import React, { useState } from "react";
import { TodoList } from "./TodoList";

const App = () => {
  const todosItems = [
    { id: 1, text: "Learn React", isCompleted: false },
    { id: 2, text: "Build a React app", isCompleted: false },
    { id: 3, text: "Deploy the React app", isCompleted: false }
  ];

  const [todos, setTodos] = useState(todosItems);

  function handleComplete(id) {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id
          ? { ...todo, isCompleted: true }
          : todo
      )
    );
  }

  return (
    <div>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
