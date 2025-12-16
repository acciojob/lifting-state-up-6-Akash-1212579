import React from "react";

export function TodoList({todos,handleComplete,hideButtons}){
    return(
        <>
        <h2>Child Component</h2>
        <ul>
  {todos.map((ele) => (
    <li key={ele.id}>
      {ele.text}
      {!ele.isCompleted && !hideButtons && (
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