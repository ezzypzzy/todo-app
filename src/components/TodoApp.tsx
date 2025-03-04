import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filter from "./Filter";
import toast from "react-hot-toast";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    } else {
      // TODO >>>> fetch initial todos from API (https://dummyjson.com/docs/todos#todos-a)
    }
  }, []);

  // Persist todos to local storage whenever they change.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo.
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    toast.success("Todo added successfully");
  };

  // Toggle the completed state of a todo.
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    toast.success("Todo status updated");
  };

  // Delete a todo.
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.success("Todo deleted successfully");
  };

  // Filter todos based on current filter state
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="container flex flex-col justify-center items-center mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Todo App</h1>
      <AddTodo addTodo={addTodo} />
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoApp;
