import React from "react";
import TodoApp from "./components/TodoApp";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-2">
      <TodoApp />
    </div>
  );
};

export default App;
