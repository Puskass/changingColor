import React, { useReducer } from "react";
import reducer, { ActionTypes, colors, initialState } from "../utils/reducers";

const QuadrantsGrid = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    dispatch({
      type: ActionTypes.SELECT_COLOR,
      payload: { color: selectedColor },
    });
  };

  const handleColorSelect = (color) => {
    dispatch({ type: ActionTypes.SELECT_COLOR, payload: { color } });
  };

  const handleSquareClick = (row, col) => {
    dispatch({ type: ActionTypes.SET_COLOR, payload: { row, col } });
  };

  const renderGrid = (grid) => {
    return grid.map((row, rowIndex) => (
      <div key={rowIndex} className="flex mb-2 gap-2">
        {row.map((cellColor, colIndex) => (
          <div
            key={colIndex}
            className={`w-8 h-8 border border-gray-400 cursor-pointer`}
            style={{
              backgroundColor: cellColor || "gray",
            }}
            onClick={() => handleSquareClick(rowIndex, colIndex)}
          ></div>
        ))}
      </div>
    ));
  };

  return (
    <div>
      <h1>Select Default Color</h1>
      <div className="mb-4">
        <div>
          <select
            onChange={handleColorChange}
            value={state.selectedColor || ""}
          >
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
        </div>
      </div>
      {state.quadrantsData.map((quadrant, index) => (
        <div key={index} className="mb-4">
          {renderGrid(quadrant.grid)}
        </div>
      ))}
    </div>
  );
};

export default QuadrantsGrid;
