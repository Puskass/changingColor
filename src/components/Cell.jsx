import React from "react";
import { ACTION_TYPES } from "../reducer/colorsReducer";

const Cell = ({ cell, rowPos, colPos, dispatch, selectedColor }) => {
  return (
    <div
      className={`w-12 h-12 border border-black mb-3 `}
      style={{
        backgroundColor: cell === null ? "white" : cell,
        cursor: selectedColor ? "pointer" : "default",
      }}
      onClick={() => {
        if (selectedColor) {
          dispatch({ type: ACTION_TYPES.PAINT_CELL, rowPos, colPos });
        }
      }}
    >
      {" "}
    </div>
  );
};

export default Cell;
