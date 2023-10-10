import React, { useReducer } from "react";
import Grid from "./components/Grid";
import PaintForm from "./components/PaintForm";
import ColorOptions from "./common/ColorOptions";
import { INITIAL_STATE, colorsReducer } from "./reducer/colorsReducer";

const App = () => {
  const [state, dispatch] = useReducer(colorsReducer, INITIAL_STATE);

  return (
    <div className="max-w-xs mx-auto">
      <PaintForm dispatch={dispatch} state={state} />
      <Grid
        grid={state.grid}
        dispatch={dispatch}
        selectedColor={state.selectedColor}
      />
    </div>
  );
};

export default App;
