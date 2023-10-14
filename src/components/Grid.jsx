import React from "react";
import Cell from "./Cell";

const Grid = ({ grid, dispatch }) => {
  //console.log(grid);
  return (
    <ul className="list-none">
      {grid.map((row, rowPos) => (
        <ul className="flex justify-evenly" key={rowPos}>
          {row.map((cell, colPos) => (
            <Cell
              key={colPos}
              cell={cell}
              rowPos={rowPos}
              colPos={colPos}
              dispatch={dispatch}
            />
          ))}
        </ul>
      ))}
    </ul>
  );
};

export default Grid;
