import React from "react";
import { useTodoStore } from "../store/todoStore"; 
import { FaTrash } from "react-icons/fa"; // Import trash icon for delete button

// Define the props for the TaskItem component.
interface TaskItemProps {
  todo: { id: number; text: string; completed: boolean }; // task id, text, and completion status.
}

// A component that shows a single task
export const TaskItem: React.FC<TaskItemProps> = ({ todo }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo); // Get the function to mark task as done or not.
  const removeTodo = useTodoStore((state) => state.removeTodo); // Get the function to delete a task.

  return (
    <li className={`task-item ${todo.completed ? "completed" : ""}`}>
      {/* Task text. Click to toggle completion status. */}
      <span onClick={() => toggleTodo(todo.id)} tabIndex={0}>
        {todo.text}
      </span>
      {/* Button to delete the task. */}
      <button
        onClick={() => removeTodo(todo.id)}
        aria-label={`Remove ${todo.text}`}
        className="delete-button"
      >
        <FaTrash />
      </button>
    </li>
  );
};