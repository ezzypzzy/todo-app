import React from "react";

interface FilterProps {
  filter: "all" | "completed" | "pending";
  setFilter: (filter: "all" | "completed" | "pending") => void;
}

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center mb-4">
      <button
        className={`mx-1 px-3 py-1 border rounded ${
          filter === "all" ? "bg-blue-500 text-white" : "bg-white"
        }`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`mx-1 px-3 py-1 border rounded ${
          filter === "completed" ? "bg-blue-500 text-white" : "bg-white"
        }`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
      <button
        className={`mx-1 px-3 py-1 border rounded ${
          filter === "pending" ? "bg-blue-500 text-white" : "bg-white"
        }`}
        onClick={() => setFilter("pending")}
      >
        Pending
      </button>
    </div>
  );
};

export default Filter;
