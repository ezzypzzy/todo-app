import React from "react";

interface FilterProps {
  filter: "all" | "completed" | "pending";
  setFilter: (filter: "all" | "completed" | "pending") => void;
}

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center mb-4">
      <button
        className={`mx-1 px-3 py-1 border-2 border-black ${
          filter === "all" ? "bg-black text-white" : "bg-white text-black"
        }`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`mx-1 px-3 py-1 border-2 border-black ${
          filter === "completed" ? "bg-black text-white" : "bg-white text-black"
        }`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
      <button
        className={`mx-1 px-3 py-1 border-2 border-black ${
          filter === "pending" ? "bg-black text-white" : "bg-white text-black"
        }`}
        onClick={() => setFilter("pending")}
      >
        Pending
      </button>
    </div>
  );
};

export default Filter;
