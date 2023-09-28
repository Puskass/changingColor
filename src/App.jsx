import React, { useReducer } from "react";
import QuadrantsGrid from "./components/Quadrants";
import { ActionTypes, colors, initialState } from "./utils/reducers";
import reducer from "./utils/reducers";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleColoredColorChange = (event) => {
    // const coloredSquareColor = event.target.value;
    // dispatch({
    //   type: ActionTypes.SET_COLORED_COLOR,
    //   payload: { color: coloredSquareColor },
    // });
  };

  const handleToggleEmpty = () => {
    // dispatch({ type: ActionTypes.TOGGLE_QUADRANTS_EMPTY });
  };

  const handleToggleColored = () => {
    // dispatch({ type: ActionTypes.TOGGLE_QUADRANTS_COLORED });
  };

  const handlePaintButtonClick = () => {
    // if (state.selectedColor) {
    //   if (state.areQuadrantsEmpty) {
    //     const newQuadrantsData = state.quadrantsData.map((quadrant) => ({
    //       grid: quadrant.grid.map((rowArray) =>
    //         rowArray.map((cell) => (cell === null ? state.selectedColor : cell))
    //       ),
    //     }));
    //     dispatch({
    //       type: ActionTypes.SET_COLOR,
    //       payload: { grid: newQuadrantsData[0].grid },
    //     });
    //   } else if (state.areQuadrantsColored) {
    //     const newQuadrantsData = state.quadrantsData.map((quadrant) => ({
    //       grid: quadrant.grid.map((rowArray) =>
    //         rowArray.map((cell) =>
    //           cell === state.coloredSquareColor ? state.selectedColor : cell
    //         )
    //       ),
    //     }));
    //     dispatch({
    //       type: ActionTypes.SET_COLOR,
    //       payload: { grid: newQuadrantsData[0].grid },
    //     });
    //   }
    // }
  };

  return (
    <div>
      <form>
        <h1>Paint In</h1>
        <select
          onChange={handleColoredColorChange}
          value={state.coloredSquareColor || ""}
        >
          <option value="">None</option>
          {colors.map((color) => (
            <option key={color.value} value={color.value}>
              {color.name}
            </option>
          ))}
        </select>

        <div className="flex flex-col">
          <div>
            <input
              type="radio"
              name="quadrantType"
              onChange={handleToggleEmpty}
              checked={state.areQuadrantsEmpty}
            />
            <label>Empty Ones</label>
          </div>
          <div>
            <input
              type="radio"
              name="quadrantType"
              onChange={handleToggleColored}
              checked={state.areQuadrantsColored}
            />
            <label>Colored Ones</label>
          </div>
        </div>

        <button type="button" onClick={handlePaintButtonClick}>
          Paint
        </button>
      </form>

      <QuadrantsGrid initialState={state} />
    </div>
  );
};

export default App;
