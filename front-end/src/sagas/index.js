import { fork } from "redux-saga/effects";
import watchCountdown from "./countdown";

export default function* rootSaga() {
  yield fork(watchCountdown);
}
