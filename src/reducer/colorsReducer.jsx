export const ACTION_TYPES = {
  SET_DEFAULT_COLOR: "SET_DEFAULT_COLOR",
  PAINT_CELL: "PAINT_CELL",
  SET_RADIO_OPTION: "SET_RADIO_OPTION",
  PAINT_EMPTY_CELLS: "PAINT_EMPTY_CELLS",
  PAINT_COLORED_CELLS: "PAINT_COLORED_CELLS",
};

export const INITIAL_STATE = {
  selectedColor: "",
  selectedRadioOption: "empty",
  grid: [
    [[], [], [], [], []],
    [[], [], [], [], []],
    [[], [], [], [], []],
    [[], [], [], [], []],
    [[], [], [], [], []],
  ],
};

export const colorsReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_DEFAULT_COLOR:
      return {
        ...state,
        selectedColor: action.color,
      };

    case ACTION_TYPES.PAINT_CELL:
      const { rowPos, colPos } = action;
      const updatedGrid = state.grid.map((row, rowIndex) =>
        rowIndex === rowPos
          ? row.map((cell, colIndex) =>
              colIndex === colPos ? [...cell, state.selectedColor] : cell
            )
          : row
      );
      return {
        ...state,
        grid: updatedGrid,
      };

    case ACTION_TYPES.SET_RADIO_OPTION:
      return {
        ...state,
        selectedRadioOption: action.option,
      };

    case ACTION_TYPES.PAINT_EMPTY_CELLS:
      const emptyGrid = state.grid.map((row) =>
        row.map((cell) => (cell.length === 0 ? state.selectedColor : cell))
      );
      return { ...state, grid: emptyGrid };

    case ACTION_TYPES.PAINT_COLORED_CELLS:
      const coloredGrid = state.grid.map((row) =>
        row.map(() => state.selectedColor)
      );
      return {
        ...state,
        grid: coloredGrid,
      };

    default:
      return state;
  }
};
