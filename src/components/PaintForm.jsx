import React from "react";
import ColorOptions from "../common/ColorOptions";
import { ACTION_TYPES } from "../reducer/colorsReducer";

const PaintForm = ({ dispatch }) => {
  return (
    <form className="p-4 border rounded-lg shadow-md my-8">
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-2">Select Default Color</h1>
        <select
          className="w-full p-2 border rounded"
          defaultValue=""
          onChange={(e) =>
            dispatch({
              type: ACTION_TYPES.SET_COLOR,
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

      <div className="flex flex-col space-y-4">
        <button
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
          type="button"
          onClick={() =>
            dispatch({
              type: ACTION_TYPES.PAINT_EMPTY_CELLS,
            })
          }
        >
          Paint Empty Ones
        </button>
        <button
          className="p-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
          type="button"
          onClick={() =>
            dispatch({
              type: ACTION_TYPES.PAINT_COLORED_CELLS,
            })
          }
        >
          Paint Colored Ones
        </button>
      </div>
    </form>
  );
};

export default PaintForm;
