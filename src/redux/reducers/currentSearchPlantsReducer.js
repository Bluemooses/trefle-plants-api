const currentSearchPlantsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CURRENT_PLANT_SEARCH_RESULTS":
      return action.payload;
    case "NEW_SEARCH_PARAMS":
      return (state = []);
    default:
      return state;
  }
};

export default currentSearchPlantsReducer;
