import React from "react";
import { ACTION_TYPES } from "../reducer/colorsReducer";
import Undo from "./Undo";

const Cell = ({ cell, rowPos, colPos, dispatch, selectedColor }) => {
  console.log(cell);
  if (!cell || typeof cell !== "object") {
    return null;
  }
  return (
    <div
      className={`w-12 h-12 border border-black mb-3 text-center bg-white`}
      style={{
        backgroundColor: cell.color || "white",
        cursor: selectedColor ? "pointer" : "default",
      }}
      onClick={() => {
        if (selectedColor) {
          dispatch({ type: ACTION_TYPES.PAINT_CELL, rowPos, colPos });
        }
      }}
    >
      <Undo cell={cell} dispatch={dispatch} />
    </div>
  );
};

export default Cell;
