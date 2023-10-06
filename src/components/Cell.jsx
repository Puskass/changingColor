import React from "react";

const Cell = ({ color, onClick }) => {
  console.log(color);
  return (
    <div
      className={`w-12 h-12 border border-black mb-3 ${
        color ? `bg-${color}-500` : ""
      }`}
      onClick={onClick}
    >
      {" "}
      {color}
    </div>
  );
};

export default Cell;
