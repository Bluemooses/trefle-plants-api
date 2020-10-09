const currentHeroReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_HERO_LIST":
      return action.payload;
    default:
      return state;
  }
};

export default currentHeroReducer;
