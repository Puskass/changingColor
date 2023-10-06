import React, { useReducer } from "react";
import Grid from "./components/Grid";
import PaintForm from "./components/PaintForm";
import ColorOptions from "./common/ColorOptions";
import {
  ACTION_TYPES,
  INITIAL_STATE,
  colorsReducer,
} from "./reducer/colorsReducer";

const App = () => {
  const [state, dispatch] = useReducer(colorsReducer, INITIAL_STATE);

  const handleCellClick = (rowIndex, columnIndex) => {
    if (state.selectedDefaultColor) {
      dispatch({
        type: ACTION_TYPES.PAINT_CELL,
        payload: { rowIndex, columnIndex },
      });
    }
  };

  return (
    <div className="max-w-xs mx-auto">
      <div className="my-3">
        <h1 className="text-2xl font-medium my-2">Select Default Color</h1>
        <ColorOptions
          selectedDefaultColor={state.selectedDefaultColor}
          onDefaultColorChange={(color) =>
            dispatch({
              type: ACTION_TYPES.SET_DEFAULT_COLOR,
              payload: { color },
            })
          }
        />
      </div>
      <PaintForm />
      <Grid grid={state.grid} onCellClick={handleCellClick} />
    </div>
  );
};

export default App;
