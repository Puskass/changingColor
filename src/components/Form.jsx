import React, { useReducer } from "react";
import formReducer, { ACTION_TYPES, initialState } from "../reducer/colorsReducer";
import { COLORS } from "../data/quadrants";

const Form = ({ onSubmit }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    dispatch({ type: ACTION_TYPES.SET_COLOR, payload: { color: selectedColor } });
  };

  const handleFillTypeChange = (isFilled) => {
    dispatch({ type: ACTION_TYPES.TOGGLE_FILL_TYPE, payload: { isFilled } });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { selectedColor, isFilled } = state;
    onSubmit(selectedColor, isFilled);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Select Color:</label>
        <select onChange={handleColorChange} value={state.selectedColor}>
          <option value="">None</option>
          {COLORS.map((color) => (
            <option key={color.value} value={color.value}>
              {color.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Fill Type:</label>
        <div>
          <input
            type="radio"
            id="filled"
            name="fillType"
            checked={state.isFilled}
            onChange={() => handleFillTypeChange(true)}
          />
          <label>Filled</label>
        </div>
        <div>
          <input
            type="radio"
            id="empty"
            name="fillType"
            checked={!state.isFilled}
            onChange={() => handleFillTypeChange(false)}
          />
          <label>Empty</label>
        </div>
      </div>
      <button type="submit">Paint Squares</button>
    </form>
  );
};

export default Form;
