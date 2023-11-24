"use client";
import React, { useState } from "react";

const Todo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState("Sample Todo");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Add logic here to save the updated todo, e.g., send it to a server or update state
  };

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-semibold mb-4">
        {isEditing ? "Edit Todo" : "Todo"}
      </h1>
      {isEditing ? (
        <>
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            className="w-full border p-2 mb-2 rounded-md"
          />
          <button
            onClick={handleSaveClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <p className="mb-2">{todoText}</p>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label className={isCompleted ? "line-through" : ""}>
              Completed
            </label>
          </div>
          <button
            onClick={handleEditClick}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default Todo;
