import { ADD_TO_CART, FOO, BAR } from "./actionTypes";

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: {
    item
  }
});

export const foo = foo => ({
  type: FOO,
  payload: {
    foo
  }
});

export const bar = bar => ({
  type: BAR,
  payload: {
    bar
  }
});