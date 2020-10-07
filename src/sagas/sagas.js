import { all } from "redux-saga/effects";
import heroSaga from "./hero.saga";
export default function* rootSaga() {
  yield all([heroSaga()]);
}
