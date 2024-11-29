import React from "react";
import { useTodoStore } from "../store/todoStore";
import { FaTrash } from "react-icons/fa";
interface TaskItemProps {
  todo: { id: number; text: string; completed: boolean };
}
export const TaskItem: React.FC<TaskItemProps> = ({ todo }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  return (
   <li className={`task-item ${todo.completed ? "completed" : ""}`}>
    <span onClick={() => toggleTodo(todo.id)} tabIndex={0}>
     {todo.text}
    </span>
    <button onClick={() => removeTodo(todo.id)} aria-label={`Remove ${todo.text}`} className="delete-button">
     <FaTrash />
    </button>
   </li>
  );
};