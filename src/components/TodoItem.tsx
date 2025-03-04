import React, { useState } from "react";
import { Todo } from "./TodoApp";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      deleteTodo(todo.id);
    }, 500);
  };

  return (
    <li
      className={`flex items-center justify-between p-2 border-b border-black transition-all duration-500 ${
        isDeleting ? "opacity-0 scale-50" : "opacity-100 scale-100"
      }`}
    >
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`flex-grow cursor-pointer text-lg h-full py-4 ${
          todo.completed ? "line-through text-green-500" : "text-black"
        }`}
      >
        {todo.text}
      </span>
      <i
        onClick={handleDelete}
        className="bx bx-trash text-2xl text-black hover:bg-red-500 cursor-pointer p-4 ml-2"
      ></i>
    </li>
  );
};

export default TodoItem;
