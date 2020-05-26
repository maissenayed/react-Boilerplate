import { FETCH_EXAMPLES } from "./actions";
import { takeLatest } from "redux-saga/effects";
import { GetExampleWorker } from "./service";
export function* exampleWatcherSaga() {
  yield takeLatest(FETCH_EXAMPLES, GetExampleWorker);
}
