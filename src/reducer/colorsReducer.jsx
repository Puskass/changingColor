export const ACTION_TYPES = {
    SET_COLOR: "SET_COLOR",
    TOGGLE_FILL_TYPE: "TOGGLE_FILL_TYPE",
  };
  
  export const initialState = {
    selectedColor: "",
    isFilled: true,
  };
  
  const formReducer = (state, action) => {
    switch (action.type) {
      case ACTION_TYPES.SET_COLOR:
        return {
          ...state,
          selectedColor: action.payload.color,
        };
  
      case ACTION_TYPES.TOGGLE_FILL_TYPE:
        return {
          ...state,
          isFilled: !state.isFilled,
        };
  
      default:
        return state;
    }
  };
  
  export default formReducer;
  