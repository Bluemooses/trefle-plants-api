import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

function* getPlants() {
  try {
    const response = yield axios.get(`/api/trefle/plants`, config);
    console.log(response);
    const payload = response.data;
    yield put({ type: "SET_PLANT_PAGE", payload });
  } catch (error) {
    console.log(error);
  }
}

function* plantSaga() {
  yield takeLatest("GET_PLANTS", getPlants);
}

export default plantSaga;
