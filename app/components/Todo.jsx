"use client";
import React, { useRef, useState } from "react";

const Todo = ({ todo, handleSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const [task, setTask] = useState(todo.task);

  const ref = useRef(0);
  const inputRef = useRef(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    handleSave(todo.id, task);

    // Add logic here to save the updated todo, e.g., send it to a server or update state
  };

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
  };

  const handleClick = () => {
    ref.current += 1;
    console.log(ref);
  };

  const handleInputRef = () => {
    inputRef.current.focus();
  };

  console.log("rerendered🔂");

  return (
    <div className="w-1/4 mx-auto p-4 bg-gray-100 shadow-xl rounded-md">
      <button
        onClick={handleInputRef}
        className="px-4 py-2 bg-orange-500 text-white rounded-lg"
      >
        click me👆
      </button>
      <h1 className="text-2xl font-semibold mb-4">
        {isEditing ? "Edit Todo" : "Todo"}
      </h1>
      {isEditing ? (
        <>
          <input
            ref={inputRef}
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
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
          <p className={`mb-2 ${isCompleted ? "line-through" : ""}`}>
            {todo.task}
          </p>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={handleCheckboxChange}
              className="mr-2 hover:cursor-pointer"
            />
            <label
              onClick={handleCheckboxChange}
              className={`${
                isCompleted ? "line-through" : ""
              } hover:cursor-pointer`}
            >
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
