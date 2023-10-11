import React from "react";

const Undo = ({ cell, dispatch }) => {
  if (!cell || !cell.history) {
    return null;
  }
  const handleRevertColor = () => {
    console.log("Cell History:", cell.history);
    if (cell.history.length > 0) {
      const previousColor = cell.history[cell.history.length - 1];
      console.log("Reverting to Color:", previousColor);
      dispatch({
        type: ACTION_TYPES.PAINT_CELL,
        rowPos,
        colPos,
        color: previousColor,
      });
    }
  };
  return (
    <button className="mt-2" onClick={handleRevertColor}>
      <span className="text-xs hover:text-lime-500">UNDO</span>
    </button>
  );
};

export default Undo;
