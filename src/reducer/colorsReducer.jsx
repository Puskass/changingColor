export const colorsReducer = (state, action) => {
  const { rowPos, colPos } = action;
  const updatedGrid = [...state.grid];

  switch (action.type) {
    case ACTION_TYPES.SET_COLOR:
      return { ...state, selectedColor: action.color };

    case ACTION_TYPES.SET_CELL_COLOR:
      updatedGrid[rowPos][colPos].push(state.selectedColor);
      return { ...state, grid: updatedGrid };

    case ACTION_TYPES.PAINT_EMPTY_CELLS:
      updatedGrid.forEach((row) => {
        row.forEach((cell) => {
          if (cell.length === 0) {
            cell.push(state.selectedColor);
          }
        });
      });
      return { ...state, grid: updatedGrid };

    case ACTION_TYPES.PAINT_COLORED_CELLS:
      updatedGrid.forEach((row) => {
        row.forEach((cell) => {
          if (cell.length !== 0) {
            cell.push(state.selectedColor);
          }
        });
      });
      return { ...state, grid: updatedGrid };

    case ACTION_TYPES.UNDO:
      updatedGrid[rowPos][colPos].pop();
      return { ...state, grid: updatedGrid };

    default:
      return state;
  }
};

export const ACTION_TYPES = {
  SET_COLOR: "SET_COLOR",
  SET_CELL_COLOR: "SET_CELL_COLOR",
  SET_RADIO_OPTION: "SET_RADIO_OPTION",
  PAINT_EMPTY_CELLS: "PAINT_EMPTY_CELLS",
  PAINT_COLORED_CELLS: "PAINT_COLORED_CELLS",
  UNDO: "UNDO",
};

export const INITIAL_STATE = {
  grid: Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => [])),
  selectedColor: "",
};
