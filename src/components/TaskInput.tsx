import React, { useState } from "react"; 
import { useTodoStore } from "../store/todoStore"; 

// Function component for adding new tasks to the list
export const TaskInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>(""); // State for managing the input text.
  const addTodo = useTodoStore((state) => state.addTodo); // Access the addTodo function from Zustand store.

  // Function to handle adding tasks when the button is clicked.
  const handleAdd = () => {
    if (inputValue.trim()) { 
      addTodo(inputValue.trim()); 
      setInputValue(""); 
    }
  };

  return (
    <div className="task-input">
      {/* Input field to type a new task */}
      <input
        type="text"
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} // Update state when input changes.
        placeholder="Add a new task" 
        aria-label="Task input" 
      />
      
      <button onClick={handleAdd} aria-label="Add task">
        Add
      </button>
    </div>
  );
};