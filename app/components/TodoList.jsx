"use client";
import React, { useState } from "react";
import Todo from "./Todo";
import todoListData from "./todolist";

const TodoList = () => {
  const [todos, setTodos] = useState(todoListData);

  const handleSave = (id, task) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => (todo.id === id ? { ...todo, task: task } : todo))
    );
  };
  return (
    <div className="flex flex-col p-3 border-2 border-black rounded-lg space-y-10">
      <h1 className="font-bold">Todo list</h1>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} handleSave={handleSave} />
      ))}
    </div>
  );
};

export default TodoList;
