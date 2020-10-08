const currentHeroReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_COMICS_BY_HERO":
      return action.payload;
    default:
      return state;
  }
};

export default currentHeroReducer;
