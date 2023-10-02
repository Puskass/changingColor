import React from "react";
import Cell from "./Cell";
import { grid } from "../data/quadrants";

const Grid = ({ onCellClick }) => {
  return (
    <div>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cellColor, colIndex) => (
            <Cell
              key={colIndex}
              color={cellColor}
              onClick={() => onCellClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
