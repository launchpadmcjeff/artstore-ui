import { ADD_TO_CART, UPDATE_SHIPPING, UPDATE_PAYMENT, FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from "./actionTypes";

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: {
    item
  }
});

export const updateShipping = shipping => ({
  type: UPDATE_SHIPPING,
  payload: shipping
});

export const updatePayment = payment => ({
  type: UPDATE_PAYMENT,
  payload: payment
});

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch('http://localhost:8080/artstore/rest/products', { headers: { 'Content-Type': 'application/json' } })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        console.log('**** fetchProducts: ****'); //+ JSON.stringify(json));
        dispatch(fetchProductsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}