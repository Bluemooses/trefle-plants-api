const currentSearchPlantsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CURRENT_PLANT_SEARCH_RESULTS":
      return action.payload;
    default:
      return state;
  }
};

export default currentSearchPlantsReducer;
