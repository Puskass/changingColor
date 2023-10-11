import React from "react";
import ColorOptions from "../common/ColorOptions";
import { ACTION_TYPES } from "../reducer/colorsReducer";

const PaintForm = ({ state, dispatch }) => {
  const handlePaintClick = (e) => {
    e.preventDefault();
    if (state.selectedRadioOption === "empty") {
      dispatch({
        type: ACTION_TYPES.PAINT_EMPTY_CELLS,
      });
    } else if (state.selectedRadioOption === "colored") {
      dispatch({
        type: ACTION_TYPES.PAINT_COLORED_CELLS,
      });
    }
  };
  const handleRadioOptionChange = (option) => {
    dispatch({
      type: ACTION_TYPES.SET_RADIO_OPTION,
      option: option,
    });
  };
  return (
    <form>
      <div className="my-3">
        <h1 className="text-2xl font-medium my-2">Select Default Color</h1>
        <select
          defaultValue=""
          onChange={(e) =>
            dispatch({
              type: ACTION_TYPES.SET_DEFAULT_COLOR,
              color: e.target.value,
            })
          }
        >
          <option value="" disabled>
            Select a Color
          </option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>
      <div className="my-3">
        <h1 className="text-2xl font-medium my-2">Paint in</h1>
        <select
          defaultValue=""
          onChange={(e) =>
            dispatch({
              type: ACTION_TYPES.SET_DEPENDANT_COLOR,
              color: e.target.value,
            })
          }
        >
          <option value="" disabled>
            Select a Color
          </option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>

      <div className="my-2">
        <div>
          <input
            type="radio"
            name="radioOptions"
            value="empty"
            checked={state.selectedRadioOption === "empty"}
            onChange={() => handleRadioOptionChange("empty")}
          />
          <label className="ml-2 text-lg">Empty Ones</label>
        </div>
        <div>
          <input
            type="radio"
            name="radioOptions"
            value="colored"
            checked={state.selectedRadioOption === "colored"}
            onChange={() => handleRadioOptionChange("colored")}
          />
          <label className="ml-2 text-lg">Colored Ones</label>
        </div>
      </div>
      <div className="my-2 mb-4 text-center">
        <button
          className=" bg-blue-600 text-white  
          font-medium text-center text-lg 
          px-5 py-2.5 rounded-lg hover:bg-blue-500"
          onClick={handlePaintClick}
          disabled={!state.selectedColor}
        >
          Paint
        </button>
      </div>
    </form>
  );
};

export default PaintForm;
