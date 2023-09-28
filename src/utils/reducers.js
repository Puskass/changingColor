export const ActionTypes = {
  SET_SQUARE_COLOR: "SET_SQUARE_COLOR",
  SELECT_DEFAULT_COLOR: "SELECT_DEFAULT_COLOR",
  TOGGLE_EMPTY_QUADRANTS: "TOGGLE_EMPTY_QUADRANTS",
  SET_EMPTY_SQUARE_COLOR: "SET_EMPTY_SQUARE_COLOR",
  TOGGLE_COLORED_QUADRANTS: "TOGGLE_COLORED_QUADRANTS",
  SET_COLORED_SQUARE_COLOR: "SET_COLORED_SQUARE_COLOR",
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
    case ActionTypes.SET_SQUARE_COLOR:
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

    case ActionTypes.SELECT_DEFAULT_COLOR:
      return {
        ...state,
        selectedColor: action.payload.color,
      };

    case ActionTypes.TOGGLE_EMPTY_QUADRANTS:
      return {
        ...state,
        areQuadrantsEmpty: !state.areQuadrantsEmpty,
      };

    case ActionTypes.SET_EMPTY_SQUARE_COLOR:
      return {
        ...state,
        emptySquareColor: action.payload.color,
      };

    case ActionTypes.TOGGLE_COLORED_QUADRANTS:
      return {
        ...state,
        areQuadrantsColored: !state.areQuadrantsColored,
      };

    case ActionTypes.SET_COLORED_SQUARE_COLOR:
      return {
        ...state,
        coloredSquareColor: action.payload.color,
      };

    default:
      return state;
  }
};

export default reducer;
