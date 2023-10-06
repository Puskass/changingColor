import React from "react";
import { COLORS } from "../data/quadrants";

const ColorOptions = ({ selectedDefaultColor, onDefaultColorChange }) => {
  return (
    <select
      onChange={(e) => onDefaultColorChange(e.target.value)}
      value={selectedDefaultColor}
      className="outline-none w-1/3"
    >
      <option value="">None</option>
      {COLORS.map((color) => (
        <option key={color.value} value={color.value}>
          {color.label}
        </option>
      ))}
    </select>
  );
};

export default ColorOptions;
