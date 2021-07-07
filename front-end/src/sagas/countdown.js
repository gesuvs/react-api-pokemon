import { eventChannel, END } from "redux-saga";
import { call, fork, put, take, cancel, cancelled } from "redux-saga/effects";

import {
  START_COUNTER,
  PAUSE_COUNTER,
  COUNT_OVER,
  counterStarted,
  counterPaused,
  updateCounter,
  countOver,
} from "../reducers/counter";

import { incrementPokebola } from "../reducers/pokebola";

const countdown = (secs) =>
  eventChannel((emit) => {
    const counter = setInterval(() => {
      secs -= 1;
      emit(secs >= 0 ? secs : END);
    }, 1000);

    return () => clearInterval(counter);
  });

function* countdownTask(secs) {
  const chan = yield call(countdown, secs);

  try {
    while (true) {
      const sec = yield take(chan);
      yield put(updateCounter(sec));
    }
  } finally {
    if (yield cancelled()) {
      chan.close();
    } else {
      yield put(countOver());
      yield put(incrementPokebola());
    }
  }
}

export default function* watchCountdown() {
  while (true) {
    const {
      payload: { secs },
    } = yield take(START_COUNTER);

    const task = yield fork(countdownTask, secs);
    yield put(counterStarted());

    const { type } = yield take([PAUSE_COUNTER, COUNT_OVER]);
    if (type === PAUSE_COUNTER) {
      yield cancel(task);
      yield put(counterPaused());
    }
  }
}
