const currentHeroReducer = (state = [{}], action) => {
  switch (action.type) {
    case "SET_CURRENT_HERO":
      return action.payload;
    default:
      return state;
  }
};

export default currentHeroReducer;
