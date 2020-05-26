import { fetchExamplesSuccess, fetchExamplesError } from "./actions";
import axios from "axios";
import { put, call } from "redux-saga/effects";

function getExamples() {
  return axios.request({
    method: "get",
    url: "your url api",
  });
}
export function* GetExampleWorker(action: any) {
  try {
    const response = yield call(getExamples);
    yield put(fetchExamplesSuccess(response.data));
  } catch (error) {
    yield put(fetchExamplesError(error));
  }
}
