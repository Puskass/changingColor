import React from "react";
import { ACTION_TYPES } from "../reducer/colorsReducer";

const Undo = ({ cell, rowPos, colPos, dispatch }) => {
  const handleUndo = () => {
    dispatch({ type: ACTION_TYPES.UNDO_COLOR, rowPos, colPos });
  };

  return <>{cell.length > 0 && <button onClick={handleUndo}>UNDO</button>}</>;
};

export default Undo;
