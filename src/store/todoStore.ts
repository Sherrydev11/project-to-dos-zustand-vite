import { create } from "zustand";

// Export the Todo interface for reuse in other components
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text) => {
    if (!text.trim()) return; // Prevent empty todos
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }],
    }));
  },
  toggleTodo: (id) =>
    set((state) => {
      if (!state.todos.some((todo) => todo.id === id)) return state; // Check if id exists
      return {
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    }),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
