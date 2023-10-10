import React from "react";
import Cell from "./Cell";

const Grid = ({ grid, dispatch, selectedColor }) => {
  console.log(grid);
  return (
    <>
      {grid.map((row, rowPos) => (
        <div className="flex justify-evenly" key={rowPos}>
          {row.map((cell, colPos) => (
            <Cell
              key={colPos}
              cell={cell}
              rowPos={rowPos}
              colPos={colPos}
              dispatch={dispatch}
              selectedColor={selectedColor}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Grid;
