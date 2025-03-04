import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "./TodoApp";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  if (todos.length === 0) {
    return <p className="text-center text-gray-500 mt-16">No tasks found</p>;
  }

  return (
    <div className="relative">
      <ul className="max-h-56 overflow-y-auto mt-16 custom-scrollbar pr-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default TodoList;
