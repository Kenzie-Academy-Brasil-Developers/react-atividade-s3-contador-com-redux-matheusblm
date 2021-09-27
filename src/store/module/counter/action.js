import { COUNT_PLUS, COUNT_LESS } from "./actionTypes";

export const countMore = () => ({
  type: COUNT_PLUS,
  payload: 1,
});

export const countLess = () => ({
  type: COUNT_LESS,
  payload: 1,
});
