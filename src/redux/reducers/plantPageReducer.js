const currentPlantPage = (state = [], action) => {
  switch (action.type) {
    case "SET_PLANT_PAGE":
      return action.payload;
    default:
      return state;
  }
};

export default currentPlantPage;
