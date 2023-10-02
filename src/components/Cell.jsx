import React from "react";

const Cell = ({ color, onClick }) => {
  return (
    <div
      className={`w-10 h-10 border border-cyan-500 m-2 ${color ? "filled" : ""}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></div>
  );
};

export default Cell;
