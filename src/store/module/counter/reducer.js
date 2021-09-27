import { COUNT_PLUS } from "./actionTypes";
import { COUNT_LESS } from "./actionTypes";

const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case COUNT_PLUS:
      return state + action.payload;

    case COUNT_LESS:
      return state - action.payload;

    default:
      return state;
  }
};

export default reducerCounter;
