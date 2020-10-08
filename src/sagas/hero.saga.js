import { put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getMarvelHero(action) {
  try {
    const response = axios.get(
      `https://trefle.io/api/v1/plants?filter_not%5Bmaximum_height_cm%5D=null&filter%5Bligneous_type%5D=tree&order%5Bmaximum_height_cm%5D=desc&token=${process.env.REACT_APP_TREFLE_API_KEY}`
    );
    console.log(response);
    yield put({ type: "SET_CURRENT_HERO" });
  } catch (error) {
    console.log(error);
  }
}

function* heroSaga() {
  yield takeLatest("GET_MARVEL_HERO", getMarvelHero);
}

export default heroSaga;
