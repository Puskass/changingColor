import React from "react";
import { ACTION_TYPES } from "../reducer/colorsReducer";

const Cell = ({ cell, rowPos, colPos, dispatch }) => {
  const backgroundColor =
    cell && cell.length > 0 ? cell[cell.length - 1] : "white";
  return (
    <li
      className={`w-16 h-16 border border-black mb-3 hover:transition-colors hover:duration-300 hover:border-yellow-500 hover:cursor-pointer`}
    >
      <div
        className="h-2/3 w-full"
        style={{ backgroundColor }}
        onClick={() => {
          dispatch({ type: ACTION_TYPES.SET_CELL_COLOR, rowPos, colPos });
        }}
      ></div>
      <button
        className="text-center w-full"
        onClick={() => dispatch({ type: ACTION_TYPES.UNDO, rowPos, colPos })}
      >
        &#8592;
      </button>
    </li>
  );
};

export default Cell;
