import React from "react";
import { useTodoStore } from "../store/todoStore"; 
import { TaskItem } from "./TaskItem"; 

// Function component to render the task list.
export const TaskList: React.FC = () => {
  const todos = useTodoStore((state) => state.todos); // Access the list of tasks from the store.

  return (
    <ul className="task-list">
      {/* Render each task as a TaskItem component. */}
      {todos.map((todo) => (
        <TaskItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};


