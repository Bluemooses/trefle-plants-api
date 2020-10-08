const currentHeroReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_COMICS_BY_HERO":
      return action.payload;
    case "NEW_HERO_SEARCHED":
      return (state = []);
    default:
      return state;
  }
};

export default currentHeroReducer;
