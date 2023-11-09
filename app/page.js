"use client";
import { useState, useEffect, useCallback } from "react";

export default function Home({ params }) {
  console.log("rendering");

  let [message, setMessage] = useState("");
  const [todos, setTodos] = useState([]);
  // const [isChecked, setChecked] = useState(false);
  const [count, setCount] = useState(5);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
      .then((res) => res.json())
      .then((json) => setTodos([json]));
  }, [count]);

  function badSetMessage(e) {
    setMessage(e.target.value);
  }
  function updateCheckbox(id) {
    // map over the todos
    const newTodos = todos.map((t) => ({
      ...t,
      completed: t.id === id ? !t.completed : t.completed,
    }));

    // set the state to the new array returned from the map function
    setTodos(newTodos);
  }

  return (
    <>
      <h1>Pulling data from an API</h1>

      <input type="text" onChange={badSetMessage} />
      <h1>{message}</h1>
      <p>You clicked the button {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
          <p>{todo.userId}</p>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => updateCheckbox(todo.id)}
          />
        </div>
      ))}
    </>
  );
}
