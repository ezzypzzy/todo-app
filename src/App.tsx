import React from "react";
import TodoApp from "./components/TodoApp";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <div>
      <TodoApp />
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
