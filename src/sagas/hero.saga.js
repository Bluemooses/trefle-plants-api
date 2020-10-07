import { put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getMarvelHero(action) {
  try {
    const heroName = { hero: action.payload };
    console.log(action.payload);
    const response = yield axios.get(
      `/api/calling/hero-search/${heroName.hero}`,
      heroName
    );
    console.log(response);
    yield put({ type: "SET_CURRENT_HERO", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* heroSaga() {
  yield takeLatest("GET_MARVEL_HERO", getMarvelHero);
}

export default heroSaga;
