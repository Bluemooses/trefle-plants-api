const plantDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PLANT_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

export default plantDetailsReducer;
