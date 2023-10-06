export const ACTION_TYPES = {
  SET_DEFAULT_COLOR: "SET_DEFAULT_COLOR",
  PAINT_CELL: "PAINT_CELL",
};

export const INITIAL_STATE = {
  selectedDefaultColor: "",
  grid: [
    ["white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white"],
    ["white", "white", "white", "white", "white"],
  ],
};

export const colorsReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_DEFAULT_COLOR:
      return {
        ...state,
        selectedDefaultColor: action.payload.color,
      };

    case ACTION_TYPES.PAINT_CELL:
      const { rowIndex, columnIndex } = action.payload;
      const updatedGrid = state.grid.map((row, rIndex) =>
        row.map((cell, cIndex) => {
          if (rIndex === rowIndex && cIndex === columnIndex) {
            return cell
              ? [...cell, state.selectedDefaultColor]
              : [state.selectedDefaultColor];
          }
          return cell;
        })
      );
      return {
        ...state,
        grid: updatedGrid,
      };

    default:
      return state;
  }
};
