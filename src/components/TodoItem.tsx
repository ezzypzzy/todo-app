import React from "react";
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
  return (
    <li className="flex items-center justify-between p-2 border-b">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`flex-grow cursor-pointer ${
          todo.completed ? "line-through text-green-500" : ""
        }`}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className="text-red-500 ml-2">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
