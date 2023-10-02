import React, { useReducer } from "react";
import QuadrantsGrid from "./components/Quadrants";
import { ActionTypes, colors, initialState } from "./utils/reducers";
import reducer from "./utils/reducers";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    dispatch({
      type: ActionTypes.SELECT_DEFAULT_COLOR,
      payload: { color: selectedColor },
    });
  };

  const handleColorSelect = (color) => {
    dispatch({ type: ActionTypes.SELECT_DEFAULT_COLOR, payload: { color } });
  };

  // const handleColoredColorChange = (event) => {
  //   const coloredSquareColor = event.target.value;
  //   dispatch({
  //     type: ActionTypes.SET_COLORED_SQUARE_COLOR,
  //     payload: { color: coloredSquareColor },
  //   });
  // };

  const handleToggleEmpty = () => {
    dispatch({ type: ActionTypes.TOGGLE_EMPTY_QUADRANTS });
  };

  const handleToggleColored = () => {
    dispatch({ type: ActionTypes.TOGGLE_COLORED_QUADRANTS });
  };

  const handlePaintQuadrants = (e) => {
    e.preventDefault();
    if (state.selectedColor) {
      dispatch({
        type: ActionTypes.PAINT_SQUARES,
        payload: {
          selectedColor: state.selectedColor,
          coloredSquareColor: state.coloredSquareColor,
          areQuadrantsEmpty: state.areQuadrantsEmpty,
        },
      });
    }
  };

  return (
    <div>
      <form>
        <h1>Paint In</h1>
        <select onChange={handleColorChange} value={state.selectedColor || ""}>
          <option value="">None</option>

          {colors.map((color) => (
            <option
              key={color.value}
              value={color.value}
              onChange={() => handleColorSelect(color)}
            >
              {color.label}
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

        <button onClick={handlePaintQuadrants}>Paint</button>
      </form>

      <QuadrantsGrid initialState={state} />
    </div>
  );
};

export default App;
