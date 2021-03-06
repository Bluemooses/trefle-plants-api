import { put,  takeLatest } from "redux-saga/effects";
import axios from "axios";
const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

function* getMarvelHero(action) {
  try {
    console.log(action.payload);

    const response = yield axios.get(`/api/trefle/${action.payload}`, config);
    console.log(response);
    const payload = response.data;

    yield put({ type: "SET_CURRENT_HERO", payload });
  } catch (error) {
    console.log(error);
  }
}

function* getComicsByHero(action) {
  try {
    console.log(action.payload);
    const response = yield axios.get(`/api/trefle/comics/${action.payload}`);
    const payload = response.data;
    yield put({ type: "SET_COMICS_BY_HERO", payload: payload });
  } catch (error) {
    console.log(error);
  }
}
function* getHeroes() {
  try {
    const response = yield axios.get("/api/trefle/heroes/comics", config);
    console.log(response);

    yield put({ type: "SET_HERO_LIST", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* heroSaga() {
  yield takeLatest("GET_MARVEL_HERO", getMarvelHero);
  yield takeLatest("GET_COMICS_BY_HERO", getComicsByHero);
  yield takeLatest("GET_HEROES", getHeroes);
}

export default heroSaga;
