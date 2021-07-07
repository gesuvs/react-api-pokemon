export const UPDATE_COUNTER = "UPDATE_COUNTER";
export const START_COUNTER = "START_COUNTER";
export const COUNTER_STARTED = "COUNTER_STARTED";
export const PAUSE_COUNTER = "PAUSE_COUNTER";
export const COUNTER_PAUSED = "COUNTER_PAUSED";
export const RESUME_COUNTER = "RESUME_COUNTER";
export const COUNT_OVER = "COUNT_OVER";

const INITIALSTATE = {
  secs: 10,
  paused: false,
};

export const startCounter = (secs) => ({
  type: START_COUNTER,
  payload: { secs },
});

export const counterStarted = () => ({
  type: COUNTER_STARTED,
});

export const updateCounter = (secs) => ({
  type: UPDATE_COUNTER,
  payload: secs,
});

export const pauseCounter = () => ({
  type: PAUSE_COUNTER,
});

export const counterPaused = () => ({
  type: COUNTER_PAUSED,
});

export const countOver = () => ({
  type: COUNT_OVER,
});

export default function counter(state = INITIALSTATE, action) {
  switch (action.type) {
    case START_COUNTER: {
      return {
        ...state,
        secs: action.payload.secs,
      };
    }
    case UPDATE_COUNTER:
      return {
        ...state,
        secs: action.payload,
      };
    case COUNTER_STARTED:
      return {
        ...state,
        paused: false,
      };
    case COUNTER_PAUSED:
      return {
        ...state,
        paused: true,
      };
    case COUNT_OVER:
      return {
        ...state,
        paused: true,
        secs: INITIALSTATE.secs,
      };
    default:
      return state;
  }
}
