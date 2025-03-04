import React, { useState, FormEvent } from "react";

interface AddTodoProps {
  addTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return; // Prevent adding empty tasks.
    addTodo(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className="p-2 border rounded-l-md"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
