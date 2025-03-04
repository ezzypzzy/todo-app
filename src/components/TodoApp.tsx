import React, { useState, useEffect, useRef } from "react";
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
  const isInitialMount = useRef(true);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos !== null) {
      try {
        const parsedTodos: Todo[] = JSON.parse(storedTodos);
        setTodos(parsedTodos);
      } catch (e) {
        console.error("Error parsing stored todos:", e);
      }
    } else {
      // Fetch initial todos from DummyJSON API if no todos in localStorage
      fetch("https://dummyjson.com/todos")
        .then((res) => res.json())
        .then((data) => {
          // The API returns an array of todos under the "todos" property.
          const apiTodos = data.todos.map(
            (todo: { id: number; todo: string; completed: boolean }) => ({
              id: todo.id,
              text: todo.todo,
              completed: todo.completed,
            })
          );
          setTodos(apiTodos);
          console.log("Fetched todos from API:", apiTodos);
        })
        .catch((err) => console.error("Error fetching todos:", err));
    }
  }, []);

  // Persist todos to local storage whenever they change,
  // but skip on the initial mount.
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
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

  // Filter todos based on current filter state.
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="w-full max-w-md mx-auto border-2 border-black p-6 bg-white">
      <h1 className="text-center text-2xl font-bold mb-2 text-black">
        To-Do List
      </h1>
      <hr className="border border-black mb-4" />
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
