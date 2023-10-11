export const ACTION_TYPES = {
  SET_DEFAULT_COLOR: "SET_DEFAULT_COLOR",
  PAINT_CELL: "PAINT_CELL",
  SET_RADIO_OPTION: "SET_RADIO_OPTION",
  PAINT_EMPTY_CELLS: "PAINT_EMPTY_CELLS",
  PAINT_COLORED_CELLS: "PAINT_COLORED_CELLS",
  UNDO_COLOR: "UNDO_COLOR",
};

export const INITIAL_STATE = {
  selectedColor: "",
  selectedRadioOption: "empty",
  grid: [
    [
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
    ],
    [
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
    ],
    [
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
    ],
    [
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
    ],
    [
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
      { color: null, history: [] },
      ,
    ],
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
      const cell = state.grid[rowPos][colPos];
      let updatedCell;

      if (cell.color !== state.selectedColor) {
        updatedCell = {
          ...cell,
          color: state.selectedColor,
          history: [...cell.history, cell.color],
        };
      } else {
        updatedCell = {
          ...cell,
          color: null,
        };
      }

      const updatedGrid = state.grid.map((row, rowIndex) =>
        rowIndex === rowPos
          ? [...row.slice(0, colPos), updatedCell, ...row.slice(colPos + 1)]
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
        row.map((cell) => {
          if (cell.color === null) {
            return {
              ...cell,
              color: state.selectedColor,
              history: [...cell.history, cell.color],
            };
          }
          return cell;
        })
      );
      return { ...state, grid: emptyGrid };

    case ACTION_TYPES.PAINT_COLORED_CELLS:
      const coloredGrid = state.grid.map((row) =>
        row.map((cell) => {
          if (cell.color !== null) {
            return {
              ...cell,
              color: state.selectedColor,
              history: [...cell.history, cell.color],
            };
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
