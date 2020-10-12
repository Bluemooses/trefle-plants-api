import { all } from "redux-saga/effects";
import heroSaga from "./hero.saga";
import plantSaga from "./plant.saga";
export default function* rootSaga() {
  yield all([heroSaga(), plantSaga()]);
}
