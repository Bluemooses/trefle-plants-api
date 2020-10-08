import { put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getMarvelHero(action) {
  try {
    console.log(action.payload);
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.get(`/api/trefle/${action.payload}`, config);
    console.log(response.data.data.results);
    const payloadObject = { payload: response.data.data.results };
    const payload = response.data.data.results;
    yield put({ type: "SET_CURRENT_HERO", payload });
  } catch (error) {
    console.log(error);
  }
}

function* heroSaga() {
  yield takeLatest("GET_MARVEL_HERO", getMarvelHero);
}

export default heroSaga;
