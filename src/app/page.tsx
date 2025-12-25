"use client";
import { useState, useEffect, ChangeEvent } from "react";
import * as Sentry from "@sentry/nextjs";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    try {
      const newTodo: Todo = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput("");
    } catch (err) {
      Sentry.captureException(err);
    }
  };

  const toggleTodo = (id: number) => {
    try {
      const newTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(newTodos);
    } catch (err) {
      Sentry.captureException(err);
    }
  };

  const deleteTodo = (id: number) => {
    try {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    } catch (err) {
      Sentry.captureException(err);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
      <h1>Todo App</h1>
      <input
        value={input}
        onChange={handleInputChange}
        placeholder="Enter todo"
        style={{ padding: "0.5rem", width: "70%" }}
      />
      <button
        onClick={addTodo}
        style={{ padding: "0.5rem", marginLeft: "0.5rem", cursor: "pointer" }}
      >
        Add
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: "1rem 0" }}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: "1rem", cursor: "pointer" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
