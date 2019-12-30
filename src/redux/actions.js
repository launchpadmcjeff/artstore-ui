import { ADD_TO_CART, FOO, BAR, FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from "./actionTypes";

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

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});