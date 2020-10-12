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

function* getPlantByName(action) {
  const search = action.payload;
  try {
    const response = yield axios.get(`/api/trefle/plants/search/${search}`);
    const payload = response.data;
    yield put({ type: "SET_CURRENT_PLANT_SEARCH_RESULTS", payload });
  } catch (error) {
    console.log(error);
  }
}

function* plantSaga() {
  yield takeLatest("GET_PLANTS", getPlants);
  yield takeLatest("SEARCH_PLANT_BY_COMMON_NAME", getPlantByName);
}

export default plantSaga;
