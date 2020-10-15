import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { act } from "react-dom/test-utils";

//CONSTANTS
const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

//FUNCTIONS
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

function* getPage(action) {
  try {
    let rawUrl = action.payload;
    console.log(action.payload);
    const response = yield axios.get(`/api/pages`, {
      params: { rawUrl: rawUrl },
    });
    console.log(response.data);
    const payload = response.data;
    yield put({ type: "SET_CURRENT_PLANT_SEARCH_RESULTS", payload });
  } catch (error) {
    console.log(error);
  }
}

function* plantSaga() {
  yield takeLatest("GET_PLANTS", getPlants);
  yield takeLatest("SEARCH_PLANT_BY_COMMON_NAME", getPlantByName);
  yield takeLatest("GET_NEXT_SEARCH_PAGE", getPage);
}

export default plantSaga;
