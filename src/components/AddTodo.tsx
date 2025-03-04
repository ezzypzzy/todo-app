import React, { useState, FormEvent } from "react";

interface AddTodoProps {
  addTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Task"
        className="w-4/5 h-10 p-2 border-2 mr-4 border-black outline-none placeholder-black"
      />
      <button
        type="submit"
        className="w-1/5 h-10 bg-black text-white p-2 hover:bg-gray-700 flex items-center justify-center"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
