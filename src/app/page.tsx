"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Counter from "@/components/Counter";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const { t } = useTranslation();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo: Todo = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
      <h1>{t("todoApp")}</h1>
      <LanguageSwitcher />
      <input
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        placeholder={t("enterTodo")}
        style={{ padding: "0.5rem", width: "70%" }}
      />
      <button
        onClick={addTodo}
        style={{ padding: "0.5rem", marginLeft: "0.5rem" }}
      >
        {t("add")}
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
              style={{ marginLeft: "1rem" }}
            >
              {t("delete")}
            </button>
          </li>
        ))}
      </ul>
      <Counter />
    </div>
  );
}
