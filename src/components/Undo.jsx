import React from "react";

const Undo = () => {
  const handleUndo = (rowPosition, colPosition) => {
    dispatch({
      type: ACTION_TYPES.UNDO_COLOR,
      rowPos: rowPosition,
      colPos: colPosition,
    });
  };

  return (
    <button className="mt-2" onClick={handleUndo}>
      <span className="text-xs hover:text-lime-500">UNDO</span>
    </button>
  );
};

export default Undo;
