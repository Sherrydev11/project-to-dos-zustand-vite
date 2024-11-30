import { create } from "zustand"; 

// Interface for a single task.
export interface Todo {
  id: number; // Unique identifier for the task.
  text: string; // Task description.
  completed: boolean; // Whether the task is completed or not.
}

// Describes the tasks and actions in the store
interface TodoStore {
  todos: Todo[]; // All tasks in a list.
  addTodo: (text: string) => void; // Adds a new task.
  toggleTodo: (id: number) => void; // Marks task as done or not done.
  removeTodo: (id: number) => void; // Deletes a task.
  }
  
// Create the store for tasks
export const useTodoStore = create<TodoStore>((set) => ({
  todos: [], // Start with no tasks.

  // Add a task to the list
  addTodo: (text) => {
    if (!text.trim()) return; // Skip if the task is empty.
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }], // Add a new task with a unique ID.
    }));
  },

  // Change if a task is done or not
  toggleTodo: (id) =>
    set((state) => {
      if (!state.todos.some((todo) => todo.id === id)) return state; // Skip if the task doesn't exist.
      return {
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ), // Update the task's completed status.
      };
    }),

  // Delete a task from the list
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id), // Keep only tasks that don't match the ID.
    })),
}));
