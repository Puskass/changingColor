export const ACTION_TYPES = {
  SET_SQUARE_COLOR: "SET_SQUARE_COLOR",
  SELECT_DEFAULT_COLOR: "SELECT_DEFAULT_COLOR",
  TOGGLE_EMPTY_QUADRANTS: "TOGGLE_EMPTY_QUADRANTS",
  SET_EMPTY_SQUARE_COLOR: "SET_EMPTY_SQUARE_COLOR",
  TOGGLE_COLORED_QUADRANTS: "TOGGLE_COLORED_QUADRANTS",
  SET_COLORED_SQUARE_COLOR: "SET_COLORED_SQUARE_COLOR",
  PAINT_SQUARES: "PAINT_SQUARES",
};

export const initialState = {
  grid: [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ],
};



const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_SQUARE_COLOR:
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

    case ACTION_TYPES.SELECT_DEFAULT_COLOR:
      return {
        ...state,
        selectedColor: action.payload.color,
      };

    case ACTION_TYPES.TOGGLE_EMPTY_QUADRANTS:
      return {
        ...state,
        areQuadrantsEmpty: !state.areQuadrantsEmpty,
      };

    case ACTION_TYPES.SET_EMPTY_SQUARE_COLOR:
      return {
        ...state,
        emptySquareColor: action.payload.color,
      };

    case ACTION_TYPES.TOGGLE_COLORED_QUADRANTS:
      return {
        ...state,
        areQuadrantsColored: !state.areQuadrantsColored,
      };

    case ACTION_TYPES.SET_COLORED_SQUARE_COLOR:
      return {
        ...state,
        coloredSquareColor: action.payload.color,
      };

    case ActionTypes.PAINT_SQUARES:
      if (action.payload.selectedColor) {
        const {
          areQuadrantsEmpty,
          areQuadrantsColored,
          quadrantsData,
          selectedColor,
          coloredSquareColor,
        } = state;
        const newQuadrantsData = quadrantsData.map((quadrant) => ({
          grid: quadrant.grid.map((rowArray) => [...rowArray]),
        }));

        for (let row = 0; row < newQuadrantsData[0].grid.length; row++) {
          for (let col = 0; col < newQuadrantsData[0].grid[row].length; col++) {
            const cell = newQuadrantsData[0].grid[row][col];
            if (
              (areQuadrantsEmpty && cell === null) ||
              (areQuadrantsColored && cell === coloredSquareColor)
            ) {
              newQuadrantsData[0].grid[row][col] = selectedColor;
            }
          }
        }
        return {
          ...state,
          quadrantsData: newQuadrantsData,
        };
      }

    default:
      return state;
  }
};

export default reducer;
