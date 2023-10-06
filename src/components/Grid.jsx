import React from "react";
import Cell from "./Cell";
import { INITIAL_STATE } from "../reducer/colorsReducer";

const Grid = ({ grid, onCellClick }) => {
  //const { grid } = INITIAL_STATE;
  return (
    <div>
      {grid.map((row, rowIndex) => (
        <div className="flex justify-evenly" key={rowIndex}>
          {row.map((cellColor, columnIndex) => (
            <Cell
              key={columnIndex}
              color={cellColor}
              onClick={() => onCellClick(rowIndex, columnIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
