import React from "react";

export function TodoList({todos,handleComplete}){
    return(
        <>
        <h2>Child Component</h2>
        <ul>
  {todos.map((ele) => (
    <li key={ele.id}>
      {ele.text}
      {!ele.isCompleted && (
        <button onClick={() => handleComplete(ele.id)}>
          Complete
        </button>
      )}
    </li>
  ))}
</ul>

        </>
    )
}