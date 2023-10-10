export const ACTION_TYPES = {
  SET_DEFAULT_COLOR: "SET_DEFAULT_COLOR",
  PAINT_CELL: "PAINT_CELL",
  SET_DEPENDANT_COLOR: "SET_DEPENDANT_COLOR",
  SET_RADIO_OPTION: "SET_RADIO_OPTION",
  PAINT_EMPTY_CELLS: "PAINT_EMPTY_CELLS",
  PAINT_COLORED_CELLS: "PAINT_COLORED_CELLS",
};

export const INITIAL_STATE = {
  selectedColor: "",
  dependantColor: "",
  selectedRadioOption: "empty",
  grid: [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
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
      const updatedGrid = [...state.grid];
      updatedGrid[action.rowPos][action.colPos] = state.selectedColor;

      return {
        grid: updatedGrid,
        selectedColor: state.selectedColor,
      };

    case ACTION_TYPES.SET_DEPENDANT_COLOR:
      return {
        ...state,
        dependantColor: action.color,
      };

    case ACTION_TYPES.SET_RADIO_OPTION:
      return {
        ...state,
        selectedRadioOption: action.option,
      };

    case ACTION_TYPES.PAINT_EMPTY_CELLS:
      const emptyGrid = state.grid.map((row) =>
        row.map((cell) => (cell === null ? state.selectedColor : cell))
      );
      return { ...state, grid: emptyGrid };

    case ACTION_TYPES.PAINT_COLORED_CELLS:
      const coloredGrid = state.grid.map((row) =>
        row.map((cell) => {
          if (cell === state.dependantColor) {
            return state.selectedColor;
          }
          return cell;
        })
      );
      return {
        ...state,
        grid: coloredGrid,
      };
    default:
      return state;
  }
};
