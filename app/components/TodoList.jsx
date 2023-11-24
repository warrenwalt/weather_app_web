"use client";
import React from "react";
import Todo from "./Todo";

const TodoList = () => {
  return (
    <div className="flex flex-col p-3 border-2 border-black rounded-lg">
      <h1 className="font-bold">Todo list</h1>
      <p>render all to do list</p>
      <Todo />
    </div>
  );
};

export default TodoList;
