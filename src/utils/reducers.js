export const ActionTypes = {
  SET_COLOR: "SET_COLOR",
  SELECT_COLOR: "SELECT_COLOR",
  TOGGLE_QUADRANTS_EMPTY: "TOGGLE_QUADRANTS_EMPTY",
  SET_EMPTY_COLOR: "SET_EMPTY_COLOR",
  TOGGLE_QUADRANTS_COLORED: "TOGGLE_QUADRANTS_COLORED",
  SET_COLORED_COLOR: "SET_COLORED_COLOR",
};

export const initialState = {
  quadrantsData: [
    {
      grid: [
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
      ],
    },
  ],
  selectedColor: "",
  areQuadrantsEmpty: true,
  emptySquareColor: null,
  areQuadrantsColored: false,
  coloredSquareColor: null,
};

export const colors = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "Green", value: "green" },
];

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_COLOR:
      const { row, col } = action.payload;
      const { quadrantsData, selectedColor } = state;

      if (selectedColor) {
        const newQuadrantsData = quadrantsData.map((quadrant) => ({
          grid: quadrant.grid.map((rowArray) => [...rowArray]),
        }));

        newQuadrantsData[0].grid[row][col] = selectedColor;

        return {
          ...state,
          quadrantsData: newQuadrantsData,
        };
      }
      return state;

    case ActionTypes.SELECT_COLOR:
      return {
        ...state,
        selectedColor: action.payload.color,
      };

    case ActionTypes.TOGGLE_QUADRANTS_EMPTY:
      return {
        ...state,
        areQuadrantsEmpty: !state.areQuadrantsEmpty,
      };

    case ActionTypes.SET_EMPTY_COLOR:
      return {
        ...state,
        emptySquareColor: action.payload.color,
      };

    case ActionTypes.TOGGLE_QUADRANTS_COLORED:
      return {
        ...state,
        areQuadrantsColored: !state.areQuadrantsColored,
      };

    case ActionTypes.SET_COLORED_COLOR:
      return {
        ...state,
        coloredSquareColor: action.payload.color,
      };

    default:
      return state;
  }
};

export default reducer;
